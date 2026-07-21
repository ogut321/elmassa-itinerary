import {defineArrayMember, defineField, defineType} from "sanity";

export const travelPackage = defineType({
  name: "package",
  title: "Package",
  type: "document",
  fields: [
    defineField({name: "packageName", title: "Package Name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "slug", title: "Slug", type: "slug", options: {source: "packageName", maxLength: 96}, validation: (rule) => rule.required()}),
    defineField({name: "departureDate", title: "Departure Date", type: "date"}),
    defineField({name: "returnDate", title: "Return Date", type: "date"}),
    defineField({name: "duration", title: "Duration", type: "string"}),
    defineField({name: "price", title: "Price", type: "number"}),
    defineField({name: "airline", title: "Airline", type: "string"}),
    defineField({name: "hotels", title: "Hotels", type: "array", of: [defineArrayMember({type: "reference", to: [{type: "hotel"}]})]}),
    defineField({name: "galleryImages", title: "Gallery Images", type: "array", of: [defineArrayMember({type: "image", options: {hotspot: true}})]}),
    defineField({name: "pdfItinerary", title: "PDF Itinerary", type: "file", options: {accept: "application/pdf"}}),
    defineField({name: "dailyItinerary", title: "Daily Itinerary", type: "array", of: [defineArrayMember({type: "object", fields: [
      defineField({name: "day", title: "Day", type: "number"}),
      defineField({name: "title", title: "Title", type: "string"}),
      defineField({name: "location", title: "Location", type: "string"}),
      defineField({name: "description", title: "Description", type: "text", rows: 4}),
    ], preview: {select: {title: "title", subtitle: "location"}}})]}),
    defineField({name: "status", title: "Status", type: "string", options: {list: ["Published", "Draft"], layout: "radio"}, initialValue: "Draft"}),
  ],
  preview: {select: {title: "packageName", subtitle: "status"}},
});
