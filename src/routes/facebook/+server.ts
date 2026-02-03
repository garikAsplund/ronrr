import { redirect } from '@sveltejs/kit';

export function GET() {
  throw redirect(
    301,
    'https://www.facebook.com/profile.php?id=61582635811286'
  );
}