import { defineField, defineType } from "sanity"

export default defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Certification Title",
      type: "string",
    }),
    defineField({
      name: "issuer",
      title: "Issuing Organization",
      type: "string",
    }),
    defineField({
      name: "issueDate",
      title: "Issue Date",
      type: "date",
    }),
    defineField({
      name: "expiryDate",
      title: "Expiry Date",
      type: "date",
    }),
    defineField({
      name: "credentialId",
      title: "Credential ID",
      type: "string",
    }),
    defineField({
      name: "credentialUrl",
      title: "Credential URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "active",
      title: "Show on Website",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Issue Date, New",
      name: "issueDateDesc",
      by: [{ field: "issueDate", direction: "desc" }],
    },
  ],
})
