import {defineArrayMember, defineField, defineType} from "sanity";

export const hotel = defineType({
  name: "hotel",
  title: "Hotel",
  type: "document",
  fields: [
    defineField({name: "name", title: "Name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "city", title: "City", type: "string"}),
    defineField({name: "rating", title: "Rating", type: "number", validation: (rule) => rule.min(1).max(5)}),
    defineField({name: "images", title: "Images", type: "array", of: [defineArrayMember({type: "image", options: {hotspot: true}})]}),
    defineField({name: "googleMapsUrl", title: "Google Maps URL", type: "url"}),
  ],
});
