
# Book Club Capstone

The book club will be a social network of likeminded individuals who share a love of books. There are numerous book clubs that one can get involved with, but they lack the social aspect of many popular websites that are frequented such as Reddit. This will be a place to suggest, share, swap, and discuss books among likeminded users. It will be built using Python, Django, Vue, HTML, CSS, and JavaScript.

## Functionality

As a social site users will be able to sign up for an account or log into an existing account. The user home page will return newly created posts displayed by time created. Users will have the option to add information to the profile page such as a name, age, bio, etc. From the home page, users will be able to search through different sections of site based on their personal preferences. The difference site sections will link to the book discusssion forum, young adult, fiction, non-fiction, graphic novel, etc. Sections will be broken up into different genres so that users will be able to browse depending on their taste in media. User created posts will be able to be edited or deleted by the user as long as they are authenticated. 

*Stretch goals for functionality includes displaying trending posts, friend content, and light/dark mode.

## Data Models
• Django created user model  
• Post Model with title, body, user, date created, and date edited 
     • title = models.CharField(max_length=100) 
     • body = models.CharField(max_length=500) 
     • user = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE)
     • created = models.DateTimeField(auto_now_add=True)
    
* Stretch goals will include follower model, like/dislike system, and sortable content 

### Week 1
• Day 1-3 -  Setting up environment, creating user/post models, establishing database  
• Day 4-5 - Importing and testing APIs
### Week 2
• Day 1-2 - Defining website content sections  
• Day 3-4 - Implementing edit/delete content  
• Day 5 - Styling
### Week 3
• Testing and fixes  
• Implementing stretch goals  
• Quality of life improvements

### Milestones
• Milestone 1 - Fully functioning and styled site  
• Milestone 2 - Ability to follower users  
• Milestone 3 - Like/Dislike system implemented 
• Milestone 4 - Ability to follow certain sections of site and exclude others

https://github.com/users/jmgraham5/projects/4
