# spring-batch-demo

1. Intro
2. History
3. Use-cases
4. Architecture
    Please do be overwhelmed by the number of details on this slide, we will go over it for a couple of times, 
    This would include theory, business case and reference to the code, so I hope you will get clear understanding what is what.
    So lets start:
    * Repository - is like any other repository in Spring stores Metadata: Job, its name, is it running to prevent parallel execution, its status and any other relevant information.
      Not only job state is persisted this happens for the most of the subcomponents. We will see in the code that we pass repository to the 
    * Launcher - Gather necessary arguments and Starts the job.
    * Job - Core of the hole framework.
    * Flow - Conditional step execution.
    * Step - Single unit of work.
    * Partitioner - Horizontal and vertical scaler.
    * Chunk, Reader, Process & Writer - would be discussed in more details on the next slide.

5. Data-flow
    So this is the place where you controll how many items you simultaneously read and write. That directly affects your memory and cpu consumption. That is where spring scope plays a big role.
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
    Can you guess how I tested it? Hint I used only one Number.
    Batch Jobs simulateneously modify a lot of data race conditions are very-very common in this scenario. Order things to prevent deadlocks. Optimistic locks and other race conditions. Be ready for that.
    Weight and estimate how much you read and process at the same time to avoid OutOfMemory Errors.  
    You may not even notice when you start to dump whole DataBase into the Memory.
    Cons come from the advantages actually Java has very limited support of GPU which is sometimes badly needed.
    It is complex you need to understand what IO is Connection Session Transaction management, DataBase design and query optimisation.
    In most of the cases Your Database is your bottleneck.
