<script context="module">
  const excludedRoutes = ["/", "/tailwindplay/", "/codepen/", "/theme-generator/"]
  export async function load({ url, fetch }) {
    if (!excludedRoutes.includes(url.pathname)) {
      const post = await fetch(`${url.pathname.replace(/\/$/, "")}.json`).then((res) => res.json())
      return {
        props: {
          path: url.pathname,
          post,
        },
      }
    } else {
      return {
        props: {
          path: url.pathname,
        },
      }
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  import { afterNavigate } from "$app/navigation"
  import { listOfStaticPagesThatNeedSidebar, listOfStaticPagesThatDontNeedSideAds } from "@src/lib/data.js"

  import { page } from "$app/stores"

  import "@components/StyleHandler.svelte"

  import "prism-themes/themes/prism-material-dark.css"
  import "@src/prism-themes-modify.css"

  import Navbar from "@components/Navbar.svelte"
  import Scripts from "@components/Scripts.svelte"
  import SEO from "@components/SEO.svelte"
  import Ads from "@components/Ads.svelte"

  import Sidebar from "@components/Sidebar.svelte"
  export let post

  let drawercontent
  let drawerContentScrollY = 0
  function parseContentScroll() {
    drawerContentScrollY = drawercontent.scrollTop
  }

  let drawersidebar
  let drawerSidebarScrollY = 0
  function parseSidebarScroll() {
    drawerSidebarScrollY = drawersidebar.scrollTop
  }
  onMount(() => {
    parseContentScroll()
    parseSidebarScroll()
  })

  afterNavigate(() => {
    drawercontent.scrollTop = 0
  })

  let checked = ""
  function closeDrawer() {
    checked = ""
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap&text=daisyUITailwindCSSComponents" rel="stylesheet" />
</svelte:head>

{#if post}
  <SEO title={post.title} desc={post.desc} img={`/images${$page.url.pathname}.jpg`} />
{/if}
<div class={`bg-base-100 drawer h-screen ${post || listOfStaticPagesThatNeedSidebar.includes($page.url.pathname) ? "drawer-mobile" : ""}`}>
  <input id="drawer" type="checkbox" class="drawer-toggle" bind:checked />
  <div bind:this={drawercontent} on:scroll={parseContentScroll} class={`drawer-content`} style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
    <Navbar {drawerContentScrollY} />
    <div class={`${post || listOfStaticPagesThatNeedSidebar.includes($page.url.pathname) ? "p-6 pb-16" : ""}`}>
      {#if post && !listOfStaticPagesThatDontNeedSideAds.includes($page.url.pathname)}
        <div class="flex justify-between gap-6">
          <div class="prose w-full max-w-4xl flex-grow">
            {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/")}
              <Ads size={1} />
              <Ads size={2} />
              <Ads size={3} />
            {/if}
            {#if post && post.title}
              <h1>{post.title}</h1>
            {/if}
            {#if post && post.desc}
              <p>{post.desc}</p>
            {/if}
            <slot />
          </div>
          {#if $page.url.pathname.replace(/\/$/, "").startsWith("/components/")}
            <div>
              <div class="sticky top-24 mt-32">
                <Ads size={4} />
                <Ads size={5} />
              </div>
            </div>
          {/if}
        </div>
      {:else}
        <slot />
      {/if}
    </div>
  </div>
  <div class="drawer-side" style="scroll-behavior: smooth; scroll-padding-top: 5rem;" bind:this={drawersidebar} on:scroll={parseSidebarScroll}>
    <label for="drawer" class="drawer-overlay" />
    <aside class="bg-base-200 w-80">
      <Sidebar {closeDrawer} {drawerSidebarScrollY} />
      <div class="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent" />
    </aside>
  </div>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" aria-label="Open or close modal" />
<div class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>

<div class="modal" id="my-modal-2">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="btn" rel="external">Yay!</a>
    </div>
  </div>
</div>

<Scripts />

<style global>
  code[class*="language-"],
  pre[class*="language-"] {
    background: unset;
  }
  .prose pre[class*="language-"] {
    max-width: 48rem;
    background-color: hsl(var(--n));
    color: hsl(var(--nc));
  }
</style>
