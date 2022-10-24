export default {
    title: "Page",
    name: "page",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",  
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }

    ]
}