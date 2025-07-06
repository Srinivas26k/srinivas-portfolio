import type { SchemaTypeDefinition } from "sanity"

import blockContent from "./schemas/blockContent"
import category from "./schemas/category"
import post from "./schemas/post"
import author from "./schemas/author"
import project from "./schemas/project"
import service from "./schemas/service"
import testimonial from "./schemas/testimonial"
import skill from "./schemas/skill"
import experience from "./schemas/experience"
import education from "./schemas/education"
import certification from "./schemas/certification"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    project,
    service,
    testimonial,
    skill,
    experience,
    education,
    certification,
  ],
}
