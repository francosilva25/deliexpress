import React from "react";
import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import ArticleMiniature from "./ArticleMiniature";
const ArticlesData = [
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
  {
    title: "Lorem Ipsum",
    link: "./article",
    resume:
      "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
    date: Date.now(),
    image: "/images/articles/article1.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultricies tortor, ac lobortis tortor. Nulla facilisi. Aliquam laoreet posuere tellus ut accumsan. Ut blandit nulla non scelerisque varius. Etiam accumsan tortor nisl, non aliquam dolor sodales vel. Vestibulum erat libero, gravida ac augue sit amet, tincidunt molestie tellus. Etiam hendrerit mi urna, a dignissim enim placerat vel. Phasellus turpis quam, pellentesque sit amet pharetra ultrices, venenatis id nisl. Sed tristique urna at tortor convallis, sit amet placerat ante tincidunt. Vestibulum et fermentum turpis, ac auctor velit. ${(
      <br />
    )} Nunc auctor porta diam, sit amet ornare lacus tincidunt et. Praesent varius purus lacinia, tincidunt ligula vel, ultricies sem. Aenean placerat erat eu nisl lacinia, ut vulputate risus imperdiet. Duis hendrerit gravida felis, vitae consequat lectus pellentesque non. Fusce tincidunt venenatis quam quis efficitur. Suspendisse hendrerit elit felis, vel varius velit euismod nec. Nullam ornare vestibulum hendrerit. Donec id convallis orci, vehicula dignissim urna. Suspendisse sed faucibus ex. Nulla sed sem augue. Fusce in sapien ipsum. Pellentesque gravida arcu eget nibh pharetra, id tristique tortor iaculis. Morbi porta sem vel lorem pharetra ultrices.${(
      <br />
    )} Sed et orci vitae neque luctus hendrerit. Nulla vitae consequat massa. Etiam blandit ipsum vel ex tempor, sed luctus tortor vestibulum. Aenean porttitor hendrerit lorem, et aliquam ante mollis ut. Vestibulum eget diam purus. Suspendisse scelerisque nibh leo, a suscipit mauris ultricies ac. Nullam gravida interdum libero eget venenatis. Integer tortor magna, lobortis eget urna et, vestibulum auctor quam.${(
      <br />
    )} 
      Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc hendrerit erat nec maximus luctus. Mauris at erat rutrum odio gravida molestie vitae ac velit. Maecenas est mauris, placerat at laoreet quis, vulputate nec est. Mauris ac porta sapien, nec venenatis est. Mauris id accumsan ex, ut molestie sapien. Morbi consectetur sem ut nulla vehicula, sed venenatis nunc consectetur. Mauris elementum, massa et ultrices ornare, lectus tellus condimentum mi, at egestas tellus lorem id dolor. Vestibulum placerat faucibus nulla, quis congue nulla. Praesent ligula urna, sagittis et ante at, lobortis ultricies risus. Maecenas quis dui vitae risus consectetur ultricies. Quisque sed finibus tellus, vel eleifend ligula. Integer lacinia pellentesque magna ut semper.${(
        <br />
      )} Nulla gravida, tortor eget rhoncus pulvinar, velit ex laoreet turpis, et molestie risus tortor a tellus. In hac habitasse platea dictumst. Phasellus lacus tellus, lobortis in congue vitae, dictum finibus lorem. Aenean neque nulla, egestas at urna et, pretium finibus lorem. Fusce viverra felis eu ligula porttitor, in iaculis quam volutpat. Nulla scelerisque, neque a pretium efficitur, augue tortor sagittis nisl, nec aliquam sem justo non purus. Cras faucibus nunc vitae neque tincidunt lacinia. Integer varius sodales mollis. Ut nibh mi, condimentum sed enim accumsan, finibus condimentum orci. Pellentesque ante lectus, tristique sed orci eu, ullamcorper egestas justo. In posuere nec metus id vehicula.${(
      <br />
    )} Nam congue nisi quis sagittis vehicula. Morbi viverra dui sed quam ultrices, id ultricies nisl sodales. Nulla eu lorem gravida, tincidunt neque finibus, rutrum est. Nam eu facilisis nulla. Quisque turpis sapien, hendrerit sit amet ligula ac, eleifend malesuada mi. Nulla sodales nunc posuere dui ornare, quis condimentum sapien ultricies. Cras finibus massa quis commodo iaculis. Duis arcu turpis, hendrerit ut hendrerit quis, placerat eget odio. Sed a magna tincidunt tellus viverra tempus.${(
      <br />
    )} Quisque semper ullamcorper dapibus. Maecenas eget tristique felis. Ut volutpat erat a lorem vestibulum, ut suscipit sem consectetur. Quisque a augue lacinia lacus finibus semper a id tellus. Integer vitae tortor in odio consectetur eleifend. Fusce ullamcorper neque id bibendum tincidunt. In blandit consequat nibh, eget convallis est ornare vel. Nullam mollis hendrerit cursus. Curabitur ornare libero ut finibus consequat.`,
    category: "Actualidad",
  },
];

const NewsSection = () => {
  const publicdadRef1 = React.useRef();
  const publicdadRef2 = React.useRef();
  const publicdadRef3 = React.useRef();
  const [publicidad1, setPublicidad1] = React.useState({ width: 0, height: 0 });
  const [publicidad2, setPublicidad2] = React.useState({ width: 0, height: 0 });
  const [publicidad3, setPublicidad3] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if (publicdadRef1.current) {
      setPublicidad1({
        width: publicdadRef1.current.offsetWidth,
        height: publicdadRef1.current.offsetHeight,
      });
    }
    if (publicdadRef2.current) {
      setPublicidad2({
        width: publicdadRef2.current.offsetWidth,
        height: publicdadRef2.current.offsetHeight,
      });
    }
    if (publicdadRef3.current) {
      setPublicidad3({
        width: publicdadRef3.current.offsetWidth,
        height: publicdadRef3.current.offsetHeight,
      });
    }
  }, []);

  return (
    <Box py={4}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Paper
              ref={publicdadRef1}
              sx={{
                width: "100%",
                height: "125px",
                color: "white",
                backgroundColor: "#f97316",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              elevation={0}
            >
              <Typography variant="h5">
                {`${publicidad1.width} x ${publicidad1.height}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={9} xs={12} py={2} /* bgcolor="blue" */>
            <Typography variant="h6">Artículos</Typography>
            <Box>
              <Grid
                container
                sx={{ marginLeft: "-20px", width: "calc(100% + 20px)" }}
              >
                {ArticlesData?.map((article, index) => (
                  <Grid item xs={12} sm={6} md={4} py={1} sx={{ paddingLeft: "20px" }} key={index}>
                    <ArticleMiniature title={article.title} img={article.image} resume={article.resume} category={article.category} link={article.link}/>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{ paddingLeft: { md: "20px", xs: "0px" } }}
            py={2}
            /* bgcolor="red" */
          >
            <Typography variant="h6">Ultimo evento</Typography>
            <Box py={1}>
              <Grid xs={12} item>
                <a
                  href="/nose"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="/images/articles/article1.jpg"
                    alt="a"
                    style={{ width: "100%", height: "100%" }}
                    /* className={classes.articleImge} */
                  />
                  <Typography
                    sx={{ "&:hover": { color: "#f97316" } }}
                    variant="body2"
                  >
                    Enel Distribución Perú aplica innovadora técnica de trabajo
                    en “líneas vivas” para garantizar la continuidad del
                    servicio de sus clientes
                  </Typography>
                </a>
                <Typography sx={{ fontSize: "0.875rem" }}>
                  Enel Distribución Perú continúa implementando soluciones
                  innovadoras de atención a sus clientes. Es así que, en el
                  2021, la empresa inició con la ejecución...
                </Typography>
              </Grid>
            </Box>
            <Box py={1}>
              <Paper
                ref={publicdadRef2}
                elevation={0}
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "0px",
                  backgroundColor: "#f97316",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="publicidad1"
              >
                <Typography variant="h5">
                  {`${publicidad2.width} x ${publicidad2.height}`}
                </Typography>
              </Paper>
            </Box>

            <Box py={1}>
              <Paper
                ref={publicdadRef3}
                elevation={0}
                sx={{
                  width: "100%",
                  height: "700px",
                  borderRadius: "0px",
                  backgroundColor: "#f97316",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="publicidad2"
              >
                <Typography variant="h5">
                  {`${publicidad3.width} x ${publicidad3.height}`}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;
