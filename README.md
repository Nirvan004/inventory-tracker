Critical Thinking
After completing the lab, consider the following questions:

How does TypeScript enforce type safety in this object-oriented program?
How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

1.TypeScript requires that every variable, property, and function has a defined type. This doesnt let you accidently call strings instead of numbers or vice versa which also helps stop bugs.
2.Both PhysicalProduct and DigitalProduct share common properties and methods like sku, name, and price. By defining it in Product, you stop yourself from wirting a lot more code redefining it in every class.
3.It helps keep business safe like someone cant go in and change the price of something or apply a discount that doesnt actually exist.
4.Polymorphism lets you treat subclasses like the main class so Code that works with the base automatically works with any new subclass so there is no need to rewrite loops, or logic.
