# 121. Introducing React Context (Context API)

In a React application sometimes we might have to pass state between components that do not have a direct link between them, and in some cases the state has to go through some components that do utilize it and only forward it to the next component. In big applications with lots of components and complex relationships this can become cumbersome.

With React Context, we can forward data between components that do not have a direct link between them, without having to go through all the component chain. This is done through a Component-wide, "behind-the-scenes" State Storage.
