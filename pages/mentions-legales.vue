<script setup lang="ts">
useLocalSeo(
  'Mentions légales | Clegal Avocats Genève & Lausanne',
  'Mentions légales de Clegal Avocats — cabinet d\'avocats à Genève (Acacias) et Lausanne (Rue Saint-Pierre 2). Inscriptions au Barreau, hébergement, propriété intellectuelle.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Mentions légales', url: 'https://clegal-avocats.ch/mentions-legales' }],
    aggregateRating: false,
  },
)
</script>

<template>
  <NuxtLayout>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Mentions légales', path: '/mentions-legales' }]" />
          <h1 class="text-4xl font-semibold text-slate-900 tracking-tight mt-6 mb-4">Mentions légales</h1>
          <p class="text-slate-600">Dernière mise à jour : 29 avril 2026</p>
        </div>
      </section>

      <section class="py-12">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Clegal Avocats</strong><br>
            Bureau de Genève — Route des Jeunes 9, 1227 Les Acacias, Suisse<br>
            Bureau de Lausanne — Rue Saint-Pierre 2, 1003 Lausanne, Suisse<br>
            Téléphone : <a href="tel:0225121050">022 512 10 50</a><br>
            Email : <a href="mailto:info@clegal-avocats.ch">info@clegal-avocats.ch</a>
          </p>

          <h2>Inscription au Barreau</h2>
          <p>
            Tous les avocats associés du cabinet sont inscrits au registre cantonal des avocats genevois tenu par la
            <strong>Commission du barreau</strong> de Genève (autorité de surveillance) et membres de l'<strong>Ordre
            des avocats de Genève (ODA)</strong>. Le cabinet est par ailleurs en lien avec la
            <strong>Fédération suisse des avocats (FSA)</strong>.
          </p>
          <p>
            Conformément à la <strong>Loi fédérale sur la libre circulation des avocats (LLCA)</strong>, l'exercice de
            la profession d'avocat est réservé aux personnes inscrites à un registre cantonal. Notre cabinet respecte
            l'ensemble des règles déontologiques applicables, dont le secret professionnel
            (<strong>art. 13 LLCA</strong>) et l'indépendance.
          </p>

          <h2>Directeur de la publication</h2>
          <p>Me Mansour A. Cheema, avocat fondateur.</p>

          <h2>Hébergement</h2>
          <p>
            Le site clegal-avocats.ch est hébergé sur Cloudflare Pages (Cloudflare, Inc., 101 Townsend St., San
            Francisco, CA 94107, États-Unis).
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site (textes, images, logos, schémas, structure) est protégé par le
            droit suisse de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, est
            interdite sans accord écrit préalable de Clegal Avocats.
          </p>
          <p>
            Les marques, logos et signes distinctifs reproduits sur le site sont la propriété de leurs détenteurs
            respectifs.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            Les informations publiées sur ce site sont à titre informatif général et ne constituent en aucun cas un
            conseil juridique personnalisé. Pour toute question juridique concernant votre situation, prenez
            rendez-vous avec l'un de nos avocats.
          </p>
          <p>
            Clegal Avocats s'efforce de maintenir le site à jour mais ne peut garantir l'exactitude permanente, complète
            ou actualité des informations diffusées.
          </p>

          <h2>Droit applicable et for</h2>
          <p>
            Les présentes mentions légales sont régies par le droit suisse. Tout litige relatif à leur interprétation
            ou exécution relève de la compétence exclusive des tribunaux de Genève.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative à ce site ou à nos services, contactez-nous au
            <a href="tel:0225121050">022 512 10 50</a> ou par email à
            <a href="mailto:info@clegal-avocats.ch">info@clegal-avocats.ch</a>.
          </p>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
