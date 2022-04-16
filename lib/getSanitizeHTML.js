import sanitizeHtml from "sanitize-html";

const commonOption = {
    allowedTags: ["a", "img"],
    allowedAttributes: {
        "a": ["href", "target"],
        "img": ["src", "width", "height", "border", "alt", "style"]
    }
};

const getSanitizeHtml = (html) => sanitizeHtml( html, commonOption );

export default getSanitizeHtml;