<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import MainLayout from './MainLayout.vue'
import { ref } from 'vue'




const welcomeItems = [
  {
    icon: DocumentationIcon,
    heading: 'Dökümantasyon',
    content: `Vue'nun <a href="https://vuejs.org/" target="_blank" rel="noopener">resmi dökümantasyonu</a> başlamak için ihtiyacınız olan tüm bilgileri sunar.`,
    isFav:true
  },
  {
    icon: ToolingIcon,
    heading: 'Araçlar',
    content: `Bu proje, <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a> ile sunulur ve paketlenir. Tavsiye edilen IDE kurulumu <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>'dır. Bileşenlerinizi ve web sayfalarınızı test etmeniz gerekiyorsa, <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> ve <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>'e göz atın.

    <br />

    Daha fazla talimat, <code>README.md</code> dosyasında mevcuttur.`,
    isFav:false
  },
  {
    icon: EcosystemIcon,
    heading: 'Ekosistem',
    content: `Projeleriniz için resmi araçlar ve kütüphaneler edinin: <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>, <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>, <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a> ve <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. Daha fazla kaynak için <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a> sitesini ziyaret etmenizi öneririz.`,
    isFav:true
  },
  {
    icon: CommunityIcon,
    heading: 'Topluluk',
    content: `Sıkıştınız mı? Sorularınızı <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a> (resmi Discord sunucumuz) veya <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a> üzerinde sorabilirsiniz. Ayrıca, en son Vue dünyasındaki haberler için <a href="https://news.vuejs.org" target="_blank" rel="noopener">mailing listemize</a> abone olabilir ve resmi <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a> Twitter hesabını takip edebilirsiniz.`,
    isFav:false
  },
  {
    icon: SupportIcon,
    heading: 'Vue Destekleyin',
    content: `Bağımsız bir proje olarak, Vue'nun sürdürülebilirliği topluluk desteğine dayanmaktadır. <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">Sponsor olarak bize yardımcı olabilirsiniz</a>.`,
    isFav:true
  }
]
</script>

<template>
 <div >
      <WelcomeItem v-for="item in welcomeItems" :key="item.heading"  :isFav="item.isFav" >
        <template #icon>
          <item.icon />
        </template>
        <template #heading>{{ item.heading }}</template>
        <div v-html="item.content"></div>
      </WelcomeItem>
    </div>
</template>
