import { z } from "zod";

const ACCEPTED_TYPES = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/rtf",
  "application/pdf",
];
const MAX_FILE_SIZE = 1024 * 1024 * 25; // 25 MB

export default z.object({
  file: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 25MB.`
    )
    .refine(
      (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
      "Only .doc, .docx, .pdf and .rtf formats are supported."
    ),
});
