import { sql } from "./db";

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  oabCredentials: string[];
  photoUrl: string | null;
  initials: string | null;
  bio: string | null;
  details: string | null;
  displayOrder: number;
  isActive: boolean;
};

type DbRow = {
  id: number;
  name: string;
  role: string;
  oab_credentials: string[] | null;
  photo_url: string | null;
  initials: string | null;
  bio: string | null;
  details: string | null;
  display_order: number;
  is_active: boolean;
};

function toMember(r: DbRow): TeamMember {
  return {
    id: r.id,
    name: r.name,
    role: r.role,
    oabCredentials: r.oab_credentials ?? [],
    photoUrl: r.photo_url,
    initials: r.initials,
    bio: r.bio,
    details: r.details,
    displayOrder: r.display_order,
    isActive: r.is_active,
  };
}

export async function getActiveTeam(): Promise<TeamMember[]> {
  const rows = (await sql`
    SELECT id, name, role, oab_credentials, photo_url, initials, bio, details,
           display_order, is_active
    FROM team_members
    WHERE is_active = TRUE
    ORDER BY display_order ASC, id ASC
  `) as DbRow[];
  return rows.map(toMember);
}

export async function getAllTeam(): Promise<TeamMember[]> {
  const rows = (await sql`
    SELECT id, name, role, oab_credentials, photo_url, initials, bio, details,
           display_order, is_active
    FROM team_members
    ORDER BY display_order ASC, id ASC
  `) as DbRow[];
  return rows.map(toMember);
}

export async function getTeamMemberById(
  id: number
): Promise<TeamMember | null> {
  const rows = (await sql`
    SELECT id, name, role, oab_credentials, photo_url, initials, bio, details,
           display_order, is_active
    FROM team_members
    WHERE id = ${id}
    LIMIT 1
  `) as DbRow[];
  if (rows.length === 0) return null;
  return toMember(rows[0]);
}

export type TeamMemberInput = {
  name: string;
  role: string;
  oabCredentials: string[];
  photoUrl?: string | null;
  initials?: string | null;
  bio?: string | null;
  details?: string | null;
  displayOrder?: number;
  isActive?: boolean;
};

export async function createTeamMember(
  input: TeamMemberInput
): Promise<number> {
  const rows = (await sql`
    INSERT INTO team_members
      (name, role, oab_credentials, photo_url, initials, bio, details,
       display_order, is_active)
    VALUES (
      ${input.name},
      ${input.role},
      ${input.oabCredentials},
      ${input.photoUrl ?? null},
      ${input.initials ?? null},
      ${input.bio ?? null},
      ${input.details ?? null},
      ${input.displayOrder ?? 999},
      ${input.isActive ?? true}
    )
    RETURNING id
  `) as { id: number }[];
  return rows[0].id;
}

export async function updateTeamMember(
  id: number,
  input: TeamMemberInput
): Promise<void> {
  await sql`
    UPDATE team_members
    SET
      name            = ${input.name},
      role            = ${input.role},
      oab_credentials = ${input.oabCredentials},
      photo_url       = ${input.photoUrl ?? null},
      initials        = ${input.initials ?? null},
      bio             = ${input.bio ?? null},
      details         = ${input.details ?? null},
      display_order   = ${input.displayOrder ?? 999},
      is_active       = ${input.isActive ?? true},
      updated_at      = NOW()
    WHERE id = ${id}
  `;
}

export async function deleteTeamMember(id: number): Promise<void> {
  await sql`DELETE FROM team_members WHERE id = ${id}`;
}

export async function reorderTeamMembers(
  orderedIds: number[]
): Promise<void> {
  for (let i = 0; i < orderedIds.length; i++) {
    await sql`
      UPDATE team_members
      SET display_order = ${i + 1}, updated_at = NOW()
      WHERE id = ${orderedIds[i]}
    `;
  }
}
