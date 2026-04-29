<script setup lang="ts">
useLocalSeo(
  'Politique de confidentialité | Clegal Avocats Genève & Lausanne',
  'Politique de confidentialité de Clegal Avocats. Données collectées, finalités, base légale (LPD suisse, RGPD UE), durée de conservation, droits des personnes.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Politique de confidentialité', url: 'https://clegal-avocats.ch/confidentialite' }],
    aggregateRating: false,
  },
)
</script>

<template>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Politique de confidentialité', path: '/confidentialite' }]" />
          <h1 class="text-4xl font-semibold text-slate-900 tracking-tight mt-6 mb-4">Politique de confidentialité</h1>
          <p class="text-slate-600">Dernière mise à jour : 29 avril 2026</p>
        </div>
      </section>

      <section class="py-12">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p>
            La protection de vos données personnelles est une priorité pour Clegal Avocats. Cette politique précise
            quelles données sont collectées, à quelles fins, sur quelle base juridique et pour combien de temps.
            Elle s'applique à la nouvelle <strong>Loi fédérale suisse sur la protection des données (nLPD)</strong> en
            vigueur depuis le 1ᵉʳ septembre 2023, ainsi qu'au <strong>Règlement général européen sur la protection
            des données (RGPD)</strong> pour les visiteurs depuis l'Union européenne.
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            <strong>Clegal Avocats</strong>, Route des Jeunes 9, 1227 Les Acacias, Genève — Email :
            <a href="mailto:info@clegal-avocats.ch">info@clegal-avocats.ch</a> — Téléphone :
            <a href="tel:0225121050">022 512 10 50</a>.
          </p>

          <h2>Données collectées</h2>
          <ul>
            <li>
              <strong>Formulaire de contact</strong> : nom, prénom, email, téléphone, message, domaine du droit
              concerné.
            </li>
            <li>
              <strong>Données de navigation</strong> : pages consultées, durée, navigateur, système d'exploitation,
              adresse IP (anonymisée pour l'analytique).
            </li>
            <li>
              <strong>Cookies techniques</strong> : strictement nécessaires au fonctionnement du site.
            </li>
            <li>
              <strong>Cookies analytiques</strong> (Google Analytics 4) : statistiques d'audience anonymisées.
            </li>
          </ul>

          <h2>Finalités du traitement</h2>
          <ul>
            <li>Répondre à vos demandes de rendez-vous ou d'information.</li>
            <li>Établir et exécuter le mandat de représentation juridique le cas échéant.</li>
            <li>Améliorer la qualité du site et de nos services (analytics anonymisés).</li>
            <li>Respecter nos obligations légales (LBA, conservation des dossiers, etc.).</li>
          </ul>

          <h2>Base légale</h2>
          <ul>
            <li>
              <strong>Consentement</strong> (art. 6 nLPD / art. 6 RGPD) pour le formulaire de contact et les cookies
              analytiques.
            </li>
            <li>
              <strong>Exécution du contrat</strong> de mandat pour les données nécessaires au traitement de votre
              dossier.
            </li>
            <li>
              <strong>Obligation légale</strong> (LLCA, LBA, droit fiscal) pour la conservation des dossiers.
            </li>
          </ul>

          <h2>Destinataires des données</h2>
          <p>
            Vos données ne sont accessibles qu'aux avocats et collaborateurs du cabinet, dans le respect du
            <strong>secret professionnel (art. 13 LLCA)</strong>. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li>Les autorités compétentes en cas d'obligation légale.</li>
            <li>Nos sous-traitants techniques (hébergement, email — Cloudflare et notre fournisseur SMTP) sous accord de confidentialité.</li>
            <li>Les juridictions et parties adverses dans le cadre des procédures où nous vous représentons.</li>
          </ul>

          <h2>Durée de conservation</h2>
          <ul>
            <li><strong>Demandes de contact non suivies</strong> : 12 mois.</li>
            <li><strong>Dossiers clients</strong> : 10 ans après la clôture (obligation déontologique LLCA + obligations fiscales).</li>
            <li><strong>Données analytics</strong> : 14 mois (Google Analytics 4 par défaut).</li>
          </ul>

          <h2>Vos droits</h2>
          <p>Conformément à la nLPD et au RGPD, vous disposez des droits suivants&nbsp;:</p>
          <ul>
            <li><strong>Accès</strong> aux données vous concernant.</li>
            <li><strong>Rectification</strong> en cas de données inexactes.</li>
            <li><strong>Effacement</strong> dans les limites des obligations légales.</li>
            <li><strong>Limitation</strong> du traitement.</li>
            <li><strong>Portabilité</strong> des données.</li>
            <li><strong>Opposition</strong> au traitement à des fins de prospection.</li>
            <li><strong>Retrait du consentement</strong> à tout moment.</li>
          </ul>
          <p>
            Pour exercer ces droits : <a href="mailto:info@clegal-avocats.ch">info@clegal-avocats.ch</a>.
          </p>

          <h2>Réclamation</h2>
          <p>
            Vous pouvez déposer une réclamation auprès du <strong>Préposé fédéral à la protection des données et à la
            transparence (PFPDT)</strong>, Feldeggweg 1, 3003 Berne — <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener">edoeb.admin.ch</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Notre site utilise des cookies strictement nécessaires (session, préférences) et des cookies analytiques
            (Google Analytics 4). Vous pouvez bloquer les cookies dans votre navigateur sans affecter le fonctionnement
            du site.
          </p>

          <h2>Sécurité</h2>
          <p>
            Le site est servi en HTTPS avec HSTS (Strict-Transport-Security). Les transmissions sont chiffrées. Les
            données sensibles sont traitées dans le respect du secret professionnel et des règles de sécurité
            applicables aux études d'avocats.
          </p>

          <h2>Modifications</h2>
          <p>
            Cette politique peut être modifiée à tout moment. La version en ligne fait foi. Date de dernière mise à
            jour indiquée en haut de page.
          </p>
        </div>
      </section>
    </main>
</template>
