// app/utils/auth.server.ts

import type { LoginForm, RegisterForm } from './types.server';
import { json, redirect } from '@remix-run/node';
import { getSupabaseClient } from './supabaseSingleton.server';
import supabaseServerClient from './supabase.server';

export async function login({ email, password }: LoginForm) {

  const supabaseClient = getSupabaseClient();
  let { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });
  
  if (error) {
    return json({ error: `Incorrect login` }, { status: 400 });
  }

  return redirect('/');
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
  const supabaseClient = await supabaseServerClient(request);
  const { data: { session } } = await supabaseClient.auth.getSession();

  if (!session) {
    console.log('session: not present')
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);

    // FIXME: cannot redirect to sign-in. Fx when calling from account.parent route
    throw redirect(`/logind?${searchParams}`);
  }
  console.log('session: present')
  
  return session.user.id;
}

export async function getUserId(request: Request) {
  const supabaseClient = await supabaseServerClient(request);
  const {
    data: {
      session
    },
  } = await supabaseClient.auth.getSession();

  if (!session) return null;

  return session.user.id;
}

export async function register(user: RegisterForm) {
  const supabaseClient = getSupabaseClient();

  let { data, error } = await supabaseClient.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        first_name: user.firstName,
        last_name: user.lastName
      }
    }
  });

  if (error) {
    return json(
      {
        error: `Something went wrong trying to create a new user. `,
        fields: { email: user.email, password: user.password },
      },
      { status: 400 }
    );
  }
  // TODO: if success, what do we do?
  // - create profile
  // - show a toast saying that they need to check their email?
  console.log('success')
  console.log(data)
  // data after user verified its account
  // [1] {
    // [1]   user: {
    // [1]     id: 'd4a68933-aa1e-46bc-92c6-bff0027d5066',
    // [1]     aud: 'authenticated',
    // [1]     role: 'authenticated',
    // [1]     email: 'cristianpand@yahoo.com',
    // [1]     phone: '',
    // [1]     confirmation_sent_at: '2023-12-18T19:23:04.976550169Z',
    // [1]     app_metadata: { provider: 'email', providers: [Array] },
    // [1]     user_metadata: { first_name: 'Cristian Florin', last_name: 'Pandele' },
    // [1]     identities: [],
    // [1]     created_at: '2023-12-18T19:23:04.976550169Z',
    // [1]     updated_at: '2023-12-18T19:23:04.976550169Z'
    // [1]   },
    // [1]   session: null
    // [1] }

    // data when user didnt verify its account by email
    // 1] {
      // [1]   user: {
      // [1]     id: '9d46c5de-5c42-4d0d-8d2b-88aa27b79741',
      // [1]     aud: 'authenticated',
      // [1]     role: 'authenticated',
      // [1]     email: 'cristianpand@yahoo.com',
      // [1]     phone: '',
      // [1]     confirmation_sent_at: '2023-12-18T19:24:24.538240897Z',
      // [1]     app_metadata: { provider: 'email', providers: [Array] },
      // [1]     user_metadata: { first_name: 'Cristian Florin', last_name: 'Pandele' },
      // [1]     identities: [ [Object] ],
      // [1]     created_at: '2023-12-18T19:24:24.534174Z',
      // [1]     updated_at: '2023-12-18T19:24:25.771378Z'
      // [1]   },
      // [1]   session: null
      // [1] }
      if (data.user?.identities?.length > 0) {
        return json(
          {
            error: `You need to verify your account with the link provided in the email `,
            fields: { email: user.email, password: user.password },
          },
          { status: 400 }
        );
      }
  return json({ success: `Signed up successfully` }, { status: 200 });
  // return redirect('/');
}

export async function logout(request: Request) {
  const sup = getSupabaseClient();
  let { error } = await sup.auth.signOut();

  return redirect('/');
}
