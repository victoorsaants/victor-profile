# João Victor da Silva Santos

Portfólio.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Textos, links, projetos e números ficam em `data/` e estão marcados como `[placeholder]` até serem substituídos por informações reais.

## Deploy na Vercel

1. Envie o repositório para o GitHub.
2. Na Vercel, clique em **Add New → Project** e importe o repositório. O framework (Next.js) é detectado sozinho; não é preciso mudar nenhuma configuração de build.
3. Clique em **Deploy**.

A URL usada no SEO, no `sitemap.xml` e no `robots.txt` vem do domínio de produção da Vercel. Para usar um domínio próprio, defina `NEXT_PUBLIC_SITE_URL` em **Settings → Environment Variables** (veja `.env.example`) e faça um novo deploy.

Para conferir o build localmente antes de publicar:

```bash
npm run build
```
