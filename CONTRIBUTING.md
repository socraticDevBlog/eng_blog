# contributing

unless explicitely discussed with socraticDev, no external PR will get merged
into this project
1
## explicit decisions 


### Helmet
```bash
warn gatsby-plugin-react-helmet: Gatsby now has built-in support for modifying the document head. Learn more at https://gatsby.dev/gatsby-head
```

we choose to keep using `gatsby-plugin-react-helmet` since refactoring existing
components to adapt to Gatsby Head API is not worth the hassle