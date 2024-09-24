# spring-batch-demo

1. Intro
2. History
3. Use-cases
4. Architecture
5. Data-flow
    memory management ang garbage collection
6. Scaling
    So everything on this slide should be familiar for us right?  
    Horizontal scaling can be done 2 ways Remote Chunking and Remote partitioning. The main difference between these two, is where you put your message broker (or any other communication channel).  
    Between Partitioner and Reader when every one have same rights and readers can read what they need and second case between reader and processor, when on master can read or has access to datasource.  
    Scaling relies on spring batch integration library and interfaces ChunkProvider ChunkRequest<T> and ChunkResponse<T> for simplicity I do not illustrate it here.  
    ChunkResponse is used to notify master and Repository via another queue about chunk execution completion. I also do not illustrate it to avoid flooding you with information.  
    Here is a good video that shows https://www.youtube.com/watch?v=dmdkJ3ZmT5E&t=682s&ab_channel=SpringDeveloper remote partitioning being implemented.  
    That's pretty much it about horizontal scaling, never tried it. We were always sufficient with single powerfull master node.  
7. Integrations
    As I already mentioned Spring has incredible number of extensions and things that it supports.
    I would start with transaction management PlatformTransactionManager more specifically and enormous number of datasource with which it integrates.
8. Classic-setup
9. Ghsl-data
10. Implementation
11. Thank-you
    Order things to prevent dead locks. Optimistic locks and other race conditions. Be ready for that.
    Can you guess how I tested it? Hint i used only single number.

