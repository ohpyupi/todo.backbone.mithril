# Todo App powered by Backbone.js and Mithril.js
This project is to demonstrate the synergy of the mixture usage of Backbone.js and Mithril.js. 
Backbone.js provides very-well architected Model/View structure. However, the pain point of Backbone.js 
comes from (1) jQuery requirement and (2) its template part.

From a quick research, I found that the pain point(1) can be easily removed by using Webpack. 
For the second point, Backbone.js actually doesn't care of what template engines developers use. 
Thus, I tried to connect virtual DOM template engine to Backbone to give better performance on client-side rendering. 
I picked up Mithril.js. Its only 8kb and no dependency behind it. 
And one down point I observed from Mithril.js was that its model structure is just vanila Javascript. 
Thus, by using Backbone.js and Mithril.js altogether, we can take advantage of strong points of both frameworks 
(1) well-structure model/view and (2) extremely light virtual DOM.

## Demo
[https://thirsty-leakey-013fd6.netlify.com](https://thirsty-leakey-013fd6.netlify.com)
