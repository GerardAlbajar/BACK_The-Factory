const mockAstroParts = [
  {
    id: "#812736SJDGHA",
    name: "REACT ASTRO",
    type: "Astro",
    framework: "React",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#812736SJDGHB",
    name: "REACT NAUT",
    type: "Naut",
    framework: "React",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT.png?alt=media&token=b4ca79a2-7a99-4674-93d2-78a2bba4322f",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#812736SJDGHC",
    name: "REACT ROCKET",
    type: "Rocket",
    framework: "React",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ROCKET.png?alt=media&token=995e1f59-1906-4c45-8813-25563b814f6a",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ROCKET_2.png?alt=media&token=d1ec2544-86ed-493c-81f2-629fa6f30abb",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#912736SJDGHA",
    name: "VUE ASTRO",
    type: "Astro",
    framework: "Vue",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO.png?alt=media&token=7cef6c2a-6169-470c-80b7-10e2a2a948f8",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO_2.png?alt=media&token=38211c53-319e-44d3-a007-cdecb9853c91",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#912736SJDGHB",
    name: "VUE NAUT",
    type: "Naut",
    framework: "Vue",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT.png?alt=media&token=4b03982b-30c6-47e7-aa2d-0600ee3972e8",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT_2.png?alt=media&token=cd6e0919-c30d-497d-8c20-8bcf55e9cfc6",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#912736SJDGHC",
    name: "VUE ROCKET",
    type: "Rocket",
    framework: "Vue",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ROCKET.png?alt=media&token=e1c642db-2806-4d43-aa9e-c6b8c6a1e4f5",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ROCKET_2.png?alt=media&token=6b162e07-11a6-450f-9957-0c274808ee2a",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#112736SJDGHA",
    name: "ANGULAR ASTRO",
    type: "Astro",
    framework: "Angular",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ASTRO.png?alt=media&token=b148cd69-04ad-4e91-b041-d00530a12adf",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ASTRO_2.png?alt=media&token=0f01579c-7fe2-4c36-9f37-da72c93b2800",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#112736SJDGHB",
    name: "ANGULAR NAUT",
    type: "Naut",
    framework: "Angular",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT.png?alt=media&token=bea70d12-3e3f-4dcf-aac6-d5303d0bdb23",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#112736SJDGHC",
    name: "ANGULAR ROCKET",
    type: "Rocket",
    framework: "Angular",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET.png?alt=media&token=9a7568ac-361a-43c9-8941-d310281f54e4",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#212736SJDGHA",
    name: "JQUERY ASTRO",
    type: "Astro",
    framework: "JQuery",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO.png?alt=media&token=5314d5ea-94ef-41ae-8238-5e38879ffd08",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#212736SJDGHB",
    name: "JQUERY NAUT",
    type: "Naut",
    framework: "JQuery",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_NAUT.png?alt=media&token=2f6d5853-2681-49fb-8469-bf695994f091",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_NAUT_2.png?alt=media&token=fe08c83e-7b76-4e11-85cc-7d46e4b3039e",
    owner: "6294eeb64326e4549274b515",
  },
  {
    id: "#212736SJDGHC",
    name: "JQUERY ROCKET",
    type: "Rocket",
    framework: "JQuery",
    assembled: "false",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET.png?alt=media&token=d0989207-5df5-4a43-91d4-e904bbdee1de",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
    owner: "6294eeb64326e4549274b515",
  },
];

module.exports = {
  mockAstroParts,
};
