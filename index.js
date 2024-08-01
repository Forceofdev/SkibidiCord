// READ THE README BEFORE DOING ANYTHING WITH THIS FILE!!!!!!!!!

// declare constant variables (electron will start throwing errors since its a variable being re-declared)
  mainWindow.webContents.once("did-navigate-in-page", () => {
    mainWindow.webContents.executeJavaScript(
      `
      let i = 0
      let item
      let messages
      let messagesArray
      let imgsrc
      let watchForUpdate
      let skibidiImage
      let fullAPP
      let serverList
      `
    );
  });
  // load html adjustments
  mainWindow.webContents.on("did-navigate-in-page", () => {
    mainWindow.webContents.executeJavaScript(`
        // initialize all of the variables. why redo it, you may ask, but i have an answer:
        // because electron is absolutely REALLY stupid and gets angry whenever you run a script that declares the same global variable once... so i have to declare them in an entirely new file, then update them EVERY FUCKING TIME...
        // PS: if you ever land a job at discord, i pray to you, DECLARE IDS... it is NOT THAT HARD and makes it SO MUCH EASIER rather than having to do these document.queryselector atrocities 
        
        item = document.querySelector("#app-mount > div.appAsidePanelWrapper_bd26cc > div.notAppAsidePanel_bd26cc > div.app_bd26cc > div > div.layers_d4b6c5.layers_a01fb1 > div > div > div > div.content_a4d4d9 > div.chat_a7d72e > div.content_a7d72e > main > form > div > div > div > div > div.textArea_d0696b.textAreaSlate_d0696b.slateContainer_e52116 > div > div.placeholder_a552a6.slateTextArea_e52116.fontSize16Padding_d0696b")
        messages = document.getElementsByClassName('scrollerInner_e2e187')
        console.error('messages')
        console.error(messages)
        fullAPP = document.getElementById('app-mount')
        serverList = document.getElementsByClassName('scroller_fea3ef none_c49869 scrollerBase_c49869')
        imgsrc = 'https://cdn.discordapp.com/attachments/724396452532453446/1268087021218304063/skibiditoilet.jpg?ex=66ab2591&is=66a9d411&hm=7404ce0427d52917fcbb5461007d4cd56894c1a80188303480d7fc73788693fa&'
        // the skibidi.
        skibidiImage = document.createElement('img')
        skibidiImage.src = imgsrc
        skibidiImage.style.height = '100%'
        skibidiImage.style.width = '100%'
        skibidiImage.style.opacity = '50%'
        skibidiImage.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
        skibidiImage.style.pointerEvents = 'none'
        document.body.appendChild(skibidiImage)
        if(messages[0]) {
        const cb = (isSecondTime) => {
          messages = document.getElementsByClassName('scrollerInner_e2e187')[0].children
          console.error(messages)
          messagesArray = Array.from(document.getElementsByClassName('scrollerInner_e2e187')[0].children)
          console.error("[SILLY DEBUGGER] MessagesArray:")
          console.error(messagesArray)
          messagesArray.forEach(entry => {
            if(entry.id.includes('chat-messages')) {
              console.error(entry)
              if(entry.children[0].children[0].children[0].localName == 'img') {
                // i am writing this at 3am. i am on the floor CRYING. i hate discord. i hate electron. i ESPECIALLY hate JAVASCRIPT....
                // fuck this stupid language...
                console.log('[SILLY DEBUGGER] Loading Skibidi PFP!')
                entry.children[0].children[0].children[0].src = imgsrc
                entry.children[0].children[0].children[0].src = imgsrc
                if(entry.children[0]?.children[0]?.children[1]?.children[0]?.children[1]?.children[0]?.children[0]?.src) {
                  console.error('[SILLY DEBUGGER] Attempting to index <img> src!')
                  console.error(entry.children[0].children[0].children[1].children[0].children[1].children[0].children[0].src)
                  entry.children[0].children[0].children[1].children[0].children[1].children[0].children[0].src = imgsrc
                }
              }
              console.error(entry.children[0].children[0].id.includes('message-reply-context'))
              if(entry?.children[0]?.children[0]?.id.includes('message-reply-context')) {
                console.error('[SILLY DEBUGGER] Loading Skibidi PFP!')
                entry.children[0].children[1].children[0].src = imgsrc
                if(entry.children[0]?.children[1]?.children[1]?.children[0]?.children[1]?.children[0]?.children[0]?.src) {
                  console.error('[SILLY DEBUGGER] Attempting to index <img> src in MessageContext!')
                  console.error(entry.children[0].children[1].children[1].children[0].children[1].children[0].children[0].src)
                  entry.children[0].children[1].children[1].children[0].children[1].children[0].children[0].src = imgsrc
                }
              }
            }
          })
          if(!isSecondTime) {
            // parsing html breaks like 1/3 of the time so you have to run the same code TWICE
            console.error('[SILLY DEBUGGER] Running init for a second time - just to make sure')
            cb(true)
          }
        }

        function callback(props) {
          console.log(props[0].addedNodes[0])
          try {
          if(props[0]?.addedNodes[0]?.children[0]) {
            if(props[0]?.addedNodes[0].children[0]?.children[0]?.id.includes('message-reply-context')) {
              console.error('[SILLY DEBUGGER] Found messageContext!')
              props[0].addedNodes[0].children[0].children[1].children[0].src = imgsrc
              props[0].addedNodes[0].children[0].children[0].children[0].src = imgsrc
              props[0].addedNodes[0].children[0].children[1].children[1].children[0].children[1].children[0].children[0].src = imgsrc
              // .children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]
              // im gonna go insane
            } else {
              props[0].addedNodes[0].children[0].children[0].children[0].src = imgsrc
              props[0].addedNodes[0].children[0].children[0].children[1].children[0].children[1].children[0].children[0].src = imgsrc
            }
          }
          } catch(e) {
            console.log(e)
            // if theres an error, discord is probably just being stupid... so lets eat up more RAM and re-index the entire page!!!!
          }
        }

        console.error(serverList)

        const ServersArray = Array.from(serverList[0].children[2].children)
        ServersArray.forEach(server => {
          console.error(server)
          try {
            if(server.children[1].children[0].children[0].children[0].children[0].children[0].children[0].localName == 'img') {
              server.children[1].children[0].children[0].children[0].children[0].children[0].children[0].src = imgsrc
            }
          } catch(e) {
            console.error('[SILLY DEBUGGER] Hit a folder!') 
          }
        })

        watchForUpdate = new MutationObserver(callback) 
        watchForUpdate.observe(messages[0], { attributes: false, childList: true, subtree: false })
        console.error('[SILLY DEBUGGER] Initialized MutationObserver! ')
        console.error(watchForUpdate)

        cb()
        
        console.error("[SILLY DEBUGGER] DOM content loaded! Attempting SkibidiCord Init...");
        console.error("[SILLY DEBUGGER] Attempting to fetch app-mount!")
        console.error(document.getElementById('app-mount'))
        console.error(item)
        if (item) {
          console.error('[SILLY DEBUGGER] Found MessageField!')
          console.error('[SILLY DEBUGGER] ITEM:' + item)
          item.innerText = 'speak yo facts cuh!!'
        } else {
          console.error('[SILLY DEBUGGER] Couldnt find MessageField') 
        }
      }
    `);
  });
