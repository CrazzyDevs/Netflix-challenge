# Netflix-project Collaboration

## HOW TO GET STARTED 
1. fork the repo 
<img width="1440" alt="Screen Shot 2023-02-24 at 6 52 36 PM" src="https://user-images.githubusercontent.com/80992383/221344299-1707cf39-1b2a-41fb-8e54-2fa5ddfc89ad.png">
You should see this when you forked. Notice the top left shows your github name and this project name. 
<img width="1440" alt="Screen Shot 2023-02-24 at 6 53 24 PM" src="https://user-images.githubusercontent.com/80992383/221344336-1301b05e-f7e3-48c2-a91b-732dd95c15ac.png">

2. Clone the repo 
<img width="1440" alt="Screen Shot 2023-02-24 at 6 53 37 PM" src="https://user-images.githubusercontent.com/80992383/221344392-394caebd-98d1-4f84-966d-6086af94ca61.png">
You should see a green button that says code. when you click on the button copy the link under HTTPS.

3. Open your vsCode and then enter the key (ctrl + J) to open the terminal 
<img width="1440" alt="Screen Shot 2023-02-24 at 6 55 11 PM" src="https://user-images.githubusercontent.com/80992383/221344558-e89cd319-7e8c-4269-9447-adbc54888e2e.png">

4. you use this command to add the repo to your vsCode
- `git clone ""` the link you copied 
- notice you're in the main branch so make sure to change your branch like this.
`git checkout -b "my-branch-name"` you if you're working on details feature it should be 
`git checkout -b "details"`

once you do that the place that was main will change to details. 
Now that you're in your branch you can work on your features.

5. Once you're done working, you can now push to github.
you push like this.

- `git add .` (you're adding all the files you just worked on)
- `git status` (to check if all your files has been added. if any one shows red note that it has not been added so go back and do the `git add`.
- `git commit -m "description of what you did" ` (you're a commiting your changes with a message of what you did)
- `git push origin (the-name-of-your-branch)`  example: git push details
- Once you have pushed, create a pull request and stop there. Make sure  NOT TO MERGE
- Reach out to me if any of these still makes no sense
