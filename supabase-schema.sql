-- JAKWO required database tables
-- Supabase Dashboard > SQL Editor > New query > paste this > Run

create table if not exists public.war_ads (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  link text not null,
  image_url text not null,
  wallet text not null,
  price numeric not null default 0,
  width integer not null default 120,
  height integer not null default 120,
  x integer not null default 80,
  y integer not null default 80,
  tx_signature text,
  created_at timestamptz not null default now()
);

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  wallet text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id integer primary key default 1,
  ticker_items jsonb not null default '["🔥 JAKWO TIMES LIVE", "⚔️ Upload ads, resize freely, block enemies", "💬 Wallet chat open — no links allowed"]'::jsonb,
  background_url text,
  decorations jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.site_settings (id) values (1) on conflict (id) do nothing;

-- Keep RLS disabled for easy first launch/testing.
alter table public.war_ads disable row level security;
alter table public.chat_messages disable row level security;
alter table public.site_settings disable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.war_ads to anon, authenticated;
grant select, insert, update, delete on public.chat_messages to anon, authenticated;
grant select, insert, update on public.site_settings to anon, authenticated;

-- Storage upload policy for bucket named 'jakwo'.
-- If this part errors, go Storage > Policies and allow SELECT/INSERT/UPDATE/DELETE for bucket jakwo.
drop policy if exists "Public read jakwo storage" on storage.objects;
create policy "Public read jakwo storage" on storage.objects for select using (bucket_id = 'jakwo');
drop policy if exists "Public upload jakwo storage" on storage.objects;
create policy "Public upload jakwo storage" on storage.objects for insert with check (bucket_id = 'jakwo');
drop policy if exists "Public update jakwo storage" on storage.objects;
create policy "Public update jakwo storage" on storage.objects for update using (bucket_id = 'jakwo');
drop policy if exists "Public delete jakwo storage" on storage.objects;
create policy "Public delete jakwo storage" on storage.objects for delete using (bucket_id = 'jakwo');
