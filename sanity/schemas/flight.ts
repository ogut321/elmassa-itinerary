import {defineField, defineType} from "sanity";

export const flight = defineType({
  name: "flight",
  title: "Flight",
  type: "document",
  fields: [
    defineField({name: "airline", title: "Airline", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "flightNumber", title: "Flight Number", type: "string"}),
    defineField({name: "departure", title: "Departure", type: "datetime"}),
    defineField({name: "arrival", title: "Arrival", type: "datetime"}),
  ],
  preview: {select: {title: "airline", subtitle: "flightNumber"}},
});
