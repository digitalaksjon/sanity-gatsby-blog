export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60768eb1520aa299e31f1f2a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uxbw5jus",
                  apiId: "a1a19ce8-d57a-4c7e-84c5-95a4297cdebc",
                },
                {
                  buildHookId: "60768eb1dd647aa6a98b4ddb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cseod5h3",
                  apiId: "e886d92a-0053-431c-b32e-55394c21cf0f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/digitalaksjon/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cseod5h3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
