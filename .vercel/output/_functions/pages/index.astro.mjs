import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderComponent, o as renderScript } from '../chunks/astro/server_BCDDxPbG.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Container;
  const { size = "lg" } = Astro2.props;
  const classOfComponent = {
    lg: "container-lg",
    sm: "container-sm"
  }[size];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classOfComponent, "class")} data-astro-cid-5hfkzgy4> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/ui/Container.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-hnhh3bfe> <div class="header__inner" data-astro-cid-hnhh3bfe> <ul class="header__items" data-astro-cid-hnhh3bfe> <li class="header__item" data-astro-cid-hnhh3bfe> <a href="#" data-astro-cid-hnhh3bfe>About us</a> </li> <li class="header__item" data-astro-cid-hnhh3bfe> <a href="#" data-astro-cid-hnhh3bfe>Services</a> </li> <li class="header__item" data-astro-cid-hnhh3bfe> <a href="#" data-astro-cid-hnhh3bfe>Service areas</a> </li> </ul> <img src="/logo.svg" alt="overscape logo" data-astro-cid-hnhh3bfe> <ul class="header__items" data-astro-cid-hnhh3bfe> <li class="header__item" data-astro-cid-hnhh3bfe> <a href="#" data-astro-cid-hnhh3bfe>Gallery</a> </li> <li class="header__item" data-astro-cid-hnhh3bfe> <a href="#" data-astro-cid-hnhh3bfe>Testimonials</a> </li> <li class="header__item" data-astro-cid-hnhh3bfe> <a href="#" data-astro-cid-hnhh3bfe>Contact us</a> </li> </ul> </div> </header> `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/ui/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    variant = "base",
    color = "primary",
    hasIcon = false,
    isOnlyIcon = false,
    href
  } = Astro2.props;
  const classOfVariant = {
    base: "base",
    outline: "outline"
  }[variant];
  const classOfColor = {
    primary: "primary",
    secondary: "secondary"
  }[color];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "link",
    classOfVariant,
    classOfColor,
    { "only-icon": isOnlyIcon }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-ryvhzzaw> ${renderSlot($$result, $$slots["default"])} ${hasIcon && renderTemplate`<div class="el" data-astro-cid-ryvhzzaw></div>`} </a> `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/ui/Link.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-znye3wee> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-znye3wee": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-znye3wee": true })} <div class="hero__inner" data-astro-cid-znye3wee> <div class="hero__inner-left" data-astro-cid-znye3wee> <div class="hero__text" data-astro-cid-znye3wee> <h1 data-astro-cid-znye3wee>Crafting Vision with Precision Building Dream Home.</h1> <p data-astro-cid-znye3wee>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p> </div> <div class="hero__actions" data-astro-cid-znye3wee> ${renderComponent($$result2, "Link", $$Link, { "hasIcon": true, "href": "#!", "data-astro-cid-znye3wee": true }, { "default": ($$result3) => renderTemplate`
Book a Meeting
` })} ${renderComponent($$result2, "Link", $$Link, { "variant": "outline", "color": "secondary", "href": "#!", "data-astro-cid-znye3wee": true }, { "default": ($$result3) => renderTemplate`
Learn More
` })} </div> </div> </div> ` })} </section> `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Hero.astro", void 0);

const $$Trust = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="trust" data-astro-cid-cmpawe4a> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-cmpawe4a": true }, { "default": ($$result2) => renderTemplate` <div class="trust__inner" data-astro-cid-cmpawe4a> <h2 class="title trust__title" data-astro-cid-cmpawe4a>
Trusted Builders with <span data-astro-cid-cmpawe4a>Over 20 Years</span> of Experience
</h2> <div class="trust__info" data-astro-cid-cmpawe4a> <div class="trust__info-top" data-astro-cid-cmpawe4a> <p data-astro-cid-cmpawe4a>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
<br data-astro-cid-cmpawe4a> <br data-astro-cid-cmpawe4a>
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.
</p> ${renderComponent($$result2, "Link", $$Link, { "variant": "outline", "href": "#!", "data-astro-cid-cmpawe4a": true }, { "default": ($$result3) => renderTemplate`More About Us` })} </div> <div class="trust__info-bottom" data-astro-cid-cmpawe4a> <div data-astro-cid-cmpawe4a> <p data-astro-cid-cmpawe4a>100%</p> <span data-astro-cid-cmpawe4a>Client Satisfaction</span> </div> <hr data-astro-cid-cmpawe4a> <div data-astro-cid-cmpawe4a> <p data-astro-cid-cmpawe4a>300+</p> <span data-astro-cid-cmpawe4a>Completed Projects</span> </div> <hr data-astro-cid-cmpawe4a> <div data-astro-cid-cmpawe4a> <p data-astro-cid-cmpawe4a>20+</p> <span data-astro-cid-cmpawe4a>Years of Experience</span> </div> </div> </div> </div> ` })} </section> `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Trust.astro", void 0);

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { imgSrc, title, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-card"${addAttribute(`background-image: url("${imgSrc}")`, "style")} data-astro-cid-qzn24t3o> <div class="bg" data-astro-cid-qzn24t3o></div> <div class="service-card__link" data-astro-cid-qzn24t3o> ${renderComponent($$result, "Link", $$Link, { "href": href, "hasIcon": true, "isOnlyIcon": true, "data-astro-cid-qzn24t3o": true })} </div> <div class="service-card__info" data-astro-cid-qzn24t3o> <p data-astro-cid-qzn24t3o>${title}</p> <span data-astro-cid-qzn24t3o>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  an unknown printer took a galley of type  and scrambled it to make a type specimen.
</span> </div> </div> `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/ui/ServiceCard.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const CARDS = [
    {
      imgSrc: "https://images.unsplash.com/photo-1550930401-6a5854f1c5dd?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "House Design",
      href: "#!"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1663316026819-ea3a6293e8e9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Laying Communications",
      href: "#!"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Roofting",
      href: "#!"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Construction",
      href: "#!"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Finishing",
      href: "#!"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="services" data-astro-cid-na62ad7e> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-na62ad7e": true }, { "default": ($$result2) => renderTemplate` <div class="services__inner" data-astro-cid-na62ad7e> <h3${addAttribute(["title", "services__title"], "class:list")} data-astro-cid-na62ad7e>
We provide <span data-astro-cid-na62ad7e>services</span> </h3> <div class="services__cards" data-astro-cid-na62ad7e> ${CARDS.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "imgSrc": card.imgSrc, "title": card.title, "href": card.href, "data-astro-cid-na62ad7e": true })}`)} </div> </div> ` })} </section> `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Services.astro", void 0);

const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="reviews" data-astro-cid-w3iqndtk> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-w3iqndtk": true }, { "default": ($$result2) => renderTemplate` <div class="reviews__inner" data-astro-cid-w3iqndtk> <div class="reviews__left" data-astro-cid-w3iqndtk> <h3 class="reviews__title title" data-astro-cid-w3iqndtk>
Hear What Our <span data-astro-cid-w3iqndtk>Clients Say</span> </h3> <div class="reviews__clients-group" data-astro-cid-w3iqndtk> <div class="reviews__clients" data-astro-cid-w3iqndtk> ${Array.from({ length: 4 }).map((_, i) => renderTemplate`<img class="reviews__client"${addAttribute(i + 1, "data-client")}${addAttribute(`/client-${i + 1}.png`, "src")}${addAttribute(`client-${i + 1}`, "alt")} data-astro-cid-w3iqndtk>`)} </div> <p class="reviews__clients-count" data-astro-cid-w3iqndtk>138+ Clients Worldwide</p> </div> </div> <div class="reviews__right swiper" data-astro-cid-w3iqndtk> <div class="gradient" data-astro-cid-w3iqndtk></div> <div class="gradient right" data-astro-cid-w3iqndtk></div> <div class="swiper-wrapper" data-astro-cid-w3iqndtk> <div class="reviews__review swiper-slide" data-astro-cid-w3iqndtk> <div class="reviews__review-text" data-astro-cid-w3iqndtk> <p class="reviews__review-title" data-astro-cid-w3iqndtk>Exceptional Workmanship!</p> <span class="reviews__review-description" data-astro-cid-w3iqndtk>
“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release”.
</span> </div> <div class="reviews__review-bottom" data-astro-cid-w3iqndtk> <div class="reviews__user" data-astro-cid-w3iqndtk> <img src="/client-1.png" class="reviews__user-avatar" alt="client" data-astro-cid-w3iqndtk> <div class="reviews__user-info" data-astro-cid-w3iqndtk> <p class="reviews__user-name" data-astro-cid-w3iqndtk>Sarah Johnson</p> <span class="reviews__user-role" data-astro-cid-w3iqndtk>House Renovation</span> </div> </div> </div> </div> <div class="reviews__review swiper-slide" data-astro-cid-w3iqndtk> <div class="reviews__review-text" data-astro-cid-w3iqndtk> <p class="reviews__review-title" data-astro-cid-w3iqndtk>Exceptional Workmanship!</p> <span class="reviews__review-description" data-astro-cid-w3iqndtk>
“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release”.
</span> </div> <div class="reviews__review-bottom" data-astro-cid-w3iqndtk> <div class="reviews__user" data-astro-cid-w3iqndtk> <img src="/client-2.png" class="reviews__user-avatar" alt="client" data-astro-cid-w3iqndtk> <div class="reviews__user-info" data-astro-cid-w3iqndtk> <p class="reviews__user-name" data-astro-cid-w3iqndtk>Sarah Johnson</p> <span class="reviews__user-role" data-astro-cid-w3iqndtk>House Renovation</span> </div> </div> </div> </div> <div class="reviews__review swiper-slide" data-astro-cid-w3iqndtk> <div class="reviews__review-text" data-astro-cid-w3iqndtk> <p class="reviews__review-title" data-astro-cid-w3iqndtk>Exceptional Workmanship!</p> <span class="reviews__review-description" data-astro-cid-w3iqndtk>
“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release”.
</span> </div> <div class="reviews__review-bottom" data-astro-cid-w3iqndtk> <div class="reviews__user" data-astro-cid-w3iqndtk> <img src="/client-3.png" class="reviews__user-avatar" alt="client" data-astro-cid-w3iqndtk> <div class="reviews__user-info" data-astro-cid-w3iqndtk> <p class="reviews__user-name" data-astro-cid-w3iqndtk>Sarah Johnson</p> <span class="reviews__user-role" data-astro-cid-w3iqndtk>House Renovation</span> </div> </div> </div> </div> <div class="reviews__review swiper-slide" data-astro-cid-w3iqndtk> <div class="reviews__review-text" data-astro-cid-w3iqndtk> <p class="reviews__review-title" data-astro-cid-w3iqndtk>Exceptional Workmanship!</p> <span class="reviews__review-description" data-astro-cid-w3iqndtk>
“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release”.
</span> </div> <div class="reviews__review-bottom" data-astro-cid-w3iqndtk> <div class="reviews__user" data-astro-cid-w3iqndtk> <img src="/client-4.png" class="reviews__user-avatar" alt="client" data-astro-cid-w3iqndtk> <div class="reviews__user-info" data-astro-cid-w3iqndtk> <p class="reviews__user-name" data-astro-cid-w3iqndtk>Sarah Johnson</p> <span class="reviews__user-role" data-astro-cid-w3iqndtk>House Renovation</span> </div> </div> </div> </div> </div> <div class="reviews__actions" data-astro-cid-w3iqndtk> <button class="reviews__action" data-astro-cid-w3iqndtk></button> <button class="reviews__action" data-astro-cid-w3iqndtk></button> </div> </div> </div> ` })} </section> ${renderScript($$result, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Reviews.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Reviews.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const PROJECTS = {
    top: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    bottom: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section class="projects" data-astro-cid-p2k3274c> <div class="projects__band" data-js-band-top data-astro-cid-p2k3274c> ${PROJECTS.top.map((project, i) => renderTemplate`<div class="projects__img-wrapper" data-astro-cid-p2k3274c> <img class="projects__img"${addAttribute(project, "src")}${addAttribute(`project image ${i}`, "alt")} data-astro-cid-p2k3274c> </div>`)} </div> <div class="projects__band" data-js-band-bottom data-astro-cid-p2k3274c> ${PROJECTS.bottom.reverse().map((project, i) => renderTemplate`<div class="projects__img-wrapper" data-astro-cid-p2k3274c> <img class="projects__img"${addAttribute(project, "src")}${addAttribute(`project image ${i}`, "alt")} data-astro-cid-p2k3274c> </div>`)} </div> </section> ${renderScript($$result, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Projects.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Projects.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="faq" data-astro-cid-5cdpwhcw> <div class="container" data-astro-cid-5cdpwhcw> <div class="faq__inner" data-astro-cid-5cdpwhcw> <h5 class="title" data-astro-cid-5cdpwhcw>
Frequently Asked <span data-astro-cid-5cdpwhcw>Questions</span> </h5> <div class="faq__items" data-astro-cid-5cdpwhcw> <div class="faq__item active" data-js-faq data-astro-cid-5cdpwhcw> <div class="faq__info" data-astro-cid-5cdpwhcw> <p class="faq__title" data-js-faq-title data-astro-cid-5cdpwhcw>
What is lorem ipsum?
</p> <span class="faq__description" data-js-faq-description data-astro-cid-5cdpwhcw>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
</span> </div> <button class="faq__button" data-js-faq-button data-astro-cid-5cdpwhcw> <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5cdpwhcw> <path d="M5.43506 13.0433H20.6524M13.0438 5.43457V20.652" stroke="#1971F5" stroke-width="2.17391" stroke-linejoin="round" data-astro-cid-5cdpwhcw></path> </svg> </button> </div> <div class="faq__item" data-js-faq data-astro-cid-5cdpwhcw> <div class="faq__info" data-astro-cid-5cdpwhcw> <p class="faq__title" data-js-faq-title data-astro-cid-5cdpwhcw>
What is lorem ipsum?
</p> <span class="faq__description" data-js-faq-description data-astro-cid-5cdpwhcw>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
</span> </div> <button class="faq__button active" data-js-faq-button data-astro-cid-5cdpwhcw> <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5cdpwhcw> <path d="M5.43506 13.0433H20.6524M13.0438 5.43457V20.652" stroke="#1971F5" stroke-width="2.17391" stroke-linejoin="round" data-astro-cid-5cdpwhcw></path> </svg> </button> </div> <div class="faq__item" data-js-faq data-astro-cid-5cdpwhcw> <div class="faq__info" data-astro-cid-5cdpwhcw> <p class="faq__title" data-js-faq-title data-astro-cid-5cdpwhcw>
What is lorem ipsum?
</p> <span class="faq__description" data-js-faq-description data-astro-cid-5cdpwhcw>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
</span> </div> <button class="faq__button active" data-js-faq-button data-astro-cid-5cdpwhcw> <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5cdpwhcw> <path d="M5.43506 13.0433H20.6524M13.0438 5.43457V20.652" stroke="#1971F5" stroke-width="2.17391" stroke-linejoin="round" data-astro-cid-5cdpwhcw></path> </svg> </button> </div> <div class="faq__item" data-js-faq data-astro-cid-5cdpwhcw> <div class="faq__info" data-astro-cid-5cdpwhcw> <p class="faq__title" data-js-faq-title data-astro-cid-5cdpwhcw>
What is lorem ipsum?
</p> <span class="faq__description" data-js-faq-description data-astro-cid-5cdpwhcw>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
</span> </div> <button class="faq__button active" data-js-faq-button data-astro-cid-5cdpwhcw> <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5cdpwhcw> <path d="M5.43506 13.0433H20.6524M13.0438 5.43457V20.652" stroke="#1971F5" stroke-width="2.17391" stroke-linejoin="round" data-astro-cid-5cdpwhcw></path> </svg> </button> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Faq.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/components/index/Faq.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Overscape" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Trust", $$Trust, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Reviews", $$Reviews, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ` })}`;
}, "C:/Users/wayne/Documents/code/web/client/astro-landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/wayne/Documents/code/web/client/astro-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
