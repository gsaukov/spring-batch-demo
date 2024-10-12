# spring-batch-demo

1. **Intro**  
   Hello and welcome everyone to today's talk about spring batch. I will talk about something I know, like and have real hands-on experience.  
   But before we start I would like to ask you two questions:  
   How many of you know when or where to use spring batch? Just put a plus in chat.  
   How many of you know how work with this framework? Just put a plus in chat.  
   Nice!  
   So lets start with its features and why it is so exciting instrument.  
2. **History**  
   During my career I ve seen all three generations of bathjobs: stored procedures, custom applications and spring batch (both annotation based and XMLs) and can conclude that Spring batch is the coolest tool among them.
3. **Use-cases**  
   Distributed transaction.
4. **Architecture**  
    Please do not be overwhelmed by the number of details on this slide, we will go over it for a couple of times.  
    This would include theory, business case and reference to the code, so I hope you will get clear understanding what is what.
    So lets start:
    * Repository - is like any other repository in Spring stores Metadata: Job, its name, its status, is it running to prevent parallel execution, and any other relevant information.
      Not only job state is persisted this happens for the most of the subcomponents. We will see in the code that we pass repository to the 
    * Launcher - Gather necessary arguments and Starts the job.
    * Job - Core of the hole framework.
    * Flow - Conditional step execution.
    * Step - Single unit of work.
    * Partitioner - Horizontal and vertical scaler.
    * Chunk, Reader, Process & Writer - would be discussed in more details on the next slide.
    Map everything to code and explain.
5. **Data-flow**  
    So this is the place where you control how many items you simultaneously read and write. That directly affects your memory and cpu consumption and that is why spring scope plays a big role.
    This is the place to control memory management ang garbage collection.  
    Chunk size controls the number of records that are processed in a single transaction, with it you can control optimal performance and reliability.
6. **Scaling**  
    So everything on this slide should be familiar for us right?  
    Horizontal scaling can be done 2 ways Remote Chunking and Remote partitioning. The main difference between these two, is where you put your message broker (or any other communication channel).  
    Between Partitioner and Reader when every one have same rights and readers can read what they need and second case between reader and processor, when only master can read or has access to datasource.  
    Scaling relies on spring batch integration library and interfaces ChunkProvider ChunkRequest<T> and ChunkResponse<T> for simplicity I do not illustrate it here.  
    ChunkResponse is used to notify master and Repository via another queue about chunk execution completion. I also do not illustrate it to avoid flooding you with information.  
    Here is a good video that shows https://www.youtube.com/watch?v=dmdkJ3ZmT5E&t=682s&ab_channel=SpringDeveloper remote partitioning being implemented.  
    That's pretty much it about horizontal scaling, never tried it. We were always sufficient with single powerful master node.  
7. **Integrations**  
    As I already mentioned Spring has incredible number of extensions and things that it supports.
    I would start with transaction management PlatformTransactionManager more specifically and enormous number of datasource with which it integrates.
8. **Classic-setup**  
    Make sure you always decouple your business logic, your spring batch application and the application server.
9. **Ghsl-data**  
   Now that you have a better understanding of Spring Batch, let's discuss the GHSL data I processed using it.  
   The data consists of archived images with two types of resolutions: 30ss (arcseconds) and 3ss. The main difference between them is their resolution. Each pixel in a 30ss image represents 1 square kilometer, while each pixel in a 3ss image covers an area of 100 x 100 meters, or 10,000 square meters.  
   Additionally, the source images are in 64-bit float format, making them incompatible with standard tools, which typically work with 32-bit integer images.  
   So, what was the goal? Initially, there wasn’t a strict plan, just a direction. I knew I needed to convert these images into classic 32-bit formats and apply a color scheme instead of grayscale.  
   The idea was to create three layers for different levels of detail:  
   * 90ss: For global or continent-level views.
   * 30ss: For city or regional views.
   * 3ss: For maximum resolution, showing data at the level of streets or individual buildings.
   In the next slide, I will show how this was implemented in practice.
10. **Implementation**  
    When processing 3ss image layer some of the images that had not content were reduced.
11. **Thank-you**  
    So this is all I wanted to show you today.  
    But before we finish I would like to ask you two questions:  
    How many of you know when or where to use spring batch? Just put a plus in chat.  
    How many of you have a high level understanding how this framework works? Just put a plus in chat.  
    
--------
    Can you guess how I tested it? Hint I used only one Number.  
    Batch Jobs simultaneously modify mass amounts of data race conditions are very-very common in this scenario. Order things to prevent deadlocks. Optimistic locks and other race conditions are common be ready for that.  
    Weight and estimate how much you read and process at the same time to avoid OutOfMemory Errors. It applies
    You may not even notice when you start to dump whole DataBase into the Memory.  
    Cons come from the advantages actually Java has very limited support of GPU which is sometimes badly needed.  
    It is complex you need to understand what IO is Connection Session Transaction management, DataBase design and query optimisation.  
    In most of the cases Your Database is your bottleneck.  
