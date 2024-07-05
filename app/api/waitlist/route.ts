import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Check if email already exists in the "emails" table
    const { data: existingEmail, error: fetchError } = await supabase
      .from('emails')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // If there's an error other than "no rows returned", throw it
      throw fetchError;
    }
    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already exists in the wishlist" },
        { status: 409 }
      );
    }

    // If email doesn't exist, insert a new record
    const { error: insertError } = await supabase
      .from('emails')
      .insert({ email });

    if (insertError) {
      throw insertError;
    }

    return NextResponse.json(
      { success: "Your email has been added to the wishlist" },
      { status: 201 }
    );
  } catch (error) {
    if (error.code === 'PGRST116') {
      return NextResponse.json(
        { error: "Email already exists in the wishlist" },
        { status: 409 }
      );
    }
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred, Please try again later." },
      { status: 500 }
    );
  }
}
