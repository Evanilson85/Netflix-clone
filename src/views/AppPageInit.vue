<template>
  <div>
    <!-- <Header 
      title="Vingadores - Ultimato"
      subtitle="subtitle"
      info=" Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem animi
    voluptatum suscipit expedita eos? Odio excepturi repellat incidunt veritatis
    illo, animi quia voluptates quod nam deleniti, accusamus expedita!
    Quaerat?`"
      video="vingadores.mp4"
    /> -->
    <Header
      title="Vingadores - Ultimato"
      subtitle="subtitle"
      info=" Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem animi
    voluptatum suscipit expedita eos? Odio excepturi repellat incidunt veritatis
    illo, animi quia voluptates quod nam deleniti, accusamus expedita!
    Quaerat?`"
      video="vingadores.mp4"
    />

    <Section />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/PagesComponents/AppHomeComponent";
import Section from "../components/PagesComponents/AppSection";
import Footer from "../components/AppFooter";

export default {
  components: {
    Header,
    Section,
    Footer,
  },
};
</script>
<style scoped>
</style>