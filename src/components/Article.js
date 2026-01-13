import React from "react";

function Article({title, preview, date="January 1, 1970", minutes }) {

if (minutes < 30) {
  let cupnum = Math.floor(minutes/5)
   switch (cupnum) {
  case  1:
  return `☕️ ${minutes} min read`
  case  2:
  return `☕️☕️ ${minutes} min read`
   case  3:
   return `☕️☕️☕️ ${minutes} min read`
   case  4:
   return `☕️☕️☕️☕️ ${minutes} min read`
   case  5:
   return `☕️☕️☕️☕️☕️ ${minutes} min read`
   case  6:
   return `☕️☕️☕️☕️☕️☕️ ${minutes} min read`
   
   }
} else if (minutes > 30) {
  let cupnum = minutes/10
  let sushi = "🍱"
  return `${sushi.repeat(cupnum)} ${minutes} min read`

}

  return (
    <article>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>
    </article>
  )
}



export default Article;
