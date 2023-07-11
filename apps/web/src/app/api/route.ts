import { NextResponse } from "next/server";

import { CLIENTS } from "@/_data/clients";
import { USERS } from "@/_data/users";
import { PROJECT_TYPES } from "@/_data/projectTypes";
import { CLIENT_EMPLOYEES } from "@/_data/clientEmployees";

export async function GET() {
  return NextResponse.json({
    clients: CLIENTS,
    users: USERS,
    projectTypes: PROJECT_TYPES,
    clientEmployees: CLIENT_EMPLOYEES,
  });
}
