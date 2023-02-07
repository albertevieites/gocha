<p align="center">
<img width="10%" src="./public//drop.svg">
</p>

<h1 align="center">Gocha</h1>

**Gocha** is an app that allows to the users save, edit and delete favorite bookmarks. Bookmarks are validated before storing them in the database.

## Stack
- HTML
- Sass
- JavaScript
- React

## User Stories
- /home - Users gain access to the /home to begin the flow.
- Create a bookmark - Users add links to save them as bookmarks to have a personal collection of their favourite websites.
- Edit a bookmark - Users can edit previously saved bookmarks to change or correct them.
- Delete bookmark - Users can delete previously saved bookmarks individually to alter their bookmark list.
- Delete all - Users can delete all bookmarks in the list with a single button.
- Navigate the list - users can go through the list's different pages.
- Search for bookmarks - Users can search for bookmarks in the list.

## Models

### Bookmarks

```javascript
{
  id: Date;
  url: String;
}
```
