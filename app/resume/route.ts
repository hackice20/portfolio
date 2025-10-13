import { NextResponse } from "next/server"

export async function GET() {
  // Redirect to external resume URL
  return NextResponse.redirect(
    "https://drive.google.com/file/d/1wHSvjIJsugpK7heRw8QDr4hRL4hczers/view?usp=sharing",
    {
      status: 308,
    }
  )
}


