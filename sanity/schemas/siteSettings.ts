import {defineField, defineType} from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({name: "companyName", title: "Company Name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "logo", title: "Logo", type: "image", options: {hotspot: true}}),
    defineField({name: "whatsappNumber", title: "WhatsApp Number", type: "string"}),
    defineField({name: "address", title: "Address", type: "text", rows: 3}),
    defineField({name: "email", title: "Email", type: "email"}),
    defineField({name: "heroTitle", title: "Hero Title", type: "string"}),
    defineField({name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 3}),
    defineField({name: "primaryColor", title: "Primary Color", type: "string", initialValue: "#0F766E"}),
    defineField({name: "secondaryColor", title: "Secondary Color", type: "string", initialValue: "#D4AF37"}),
  ],
  preview: {select: {title: "companyName"}},
});
