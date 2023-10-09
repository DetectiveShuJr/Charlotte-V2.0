const Discord = require('discord.js')
module.exports = {
    name:'cg',
    Description:'fun little gif command',
    execute(message) {
            // random number generator
            number = 142;
            //will pick a random number between 1 and 14

            // number determining what catgirl will be shown
            switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
            case 1:
                catgirlImage = ('https://i.ibb.co/sKQXZSp/1116830.jpg')
                break;
            case 2:
                catgirlImage = ('https://i.ibb.co/10NXBvx/75502693-p0-master1200.webp')
                break;
            case 3:
                catgirlImage = ('https://i.ibb.co/CmW48kZ/78419159-p1-master1200.webp')
                break;
            case 4:
                catgirlImage = ('https://i.ibb.co/M5BvCnQ/b441b11c8438f4ae5fdcf46e49f518f0f53db3f9-hq.jpg')
                break;
            case 5:
                catgirlImage = ('https://i.ibb.co/x6qZzkH/BJSVmd9-Vf.jpg')
                break;
            case 6:
                catgirlImage = ('https://i.ibb.co/yyd59hj/c1.jpg')
                break;
            case 7:
                catgirlImage = ('https://i.ibb.co/2P8dZW4/rk-FTWuc-NG.jpg')
                break;
            case 8:
                catgirlImage = ('https://i.ibb.co/dp6s0zH/c6.jpg')
                break;
            case 9:
                catgirlImage = ('https://i.ibb.co/HG9rT2t/c8.jpg')
                break;
            case 10:
                catgirlImage = ('https://i.ibb.co/qdNcvfb/c20.jpg')
                break;
            case 11:
                catgirlImage = ('https://i.ibb.co/BcnCnCp/c22.jpg')
                break;
            case 12:
                catgirlImage = ('https://i.ibb.co/xjTy7Xd/Cat-Girl18.jpg')
                break;
            case 13:
                catgirlImage = ('https://i.ibb.co/48LNzyB/Cat-Girl19.jpg')
                break;
            case 14:
                catgirlImage = ('https://i.ibb.co/R3LZBGt/15123-A74-0747-466-D-8-A9-D-FD1-F2-CD8-F2-A3.jpg')
                break;
            case 15:
                catgirlImage = ('https://i.ibb.co/z53svrT/Cat-Girl65.png')
                break;
            case 16:
                catgirlImage = ('https://i.ibb.co/8McXh57/Cat-Girl69.jpg')
                break;
            case 17:
                catgirlImage = ('https://i.ibb.co/y6zcBKd/Cat-Girl78-1.jpg')
                break;
            case 18:
                catgirlImage = ('https://i.ibb.co/72LpDjg/image2.jpg')
                break;
            case 19:
                catgirlImage = ('https://i.ibb.co/BNPqDbF/Cat-Girl92.jpg')
                break;
            case 20:
                catgirlImage = ('https://i.ibb.co/KWmx7NP/Cat-Girl97.jpg')
                break;
            case 21:
                catgirlImage = ('https://i.ibb.co/9GGRx0Z/Cat-Girls82.jpg')
                break;
            case 22:
                catgirlImage = ('https://i.ibb.co/LdZKRLk/Cat-Girls86.jpg')
                break;
            case 23:
                catgirlImage = ('https://i.ibb.co/hXGJyF9/cg1.jpg')
                break;
            case 24:
                catgirlImage = ('https://i.ibb.co/8gczzh2/cg2.jpg')
                break;
            case 25:
                catgirlImage = ('https://i.ibb.co/GHpbHbc/cg3-1.jpg')
                break;
            case 26:
                catgirlImage = ('https://i.ibb.co/Yd6TfcC/cg3-2.jpg')
                break;
            case 27:
                catgirlImage = ('https://i.ibb.co/T8jbnRR/cg3-3.jpg')
                break;
            case 28:
                catgirlImage = ('https://i.ibb.co/f1q7hbC/cg3-5.jpg')
                break; 
            case 29:
                catgirlImage = ('https://i.ibb.co/bdvBXcx/cg4.jpg')
                break;
            case 30:
                catgirlImage = ('https://i.ibb.co/g3bztkd/cg5.jpg')
                break;
            case 31:
                catgirlImage = ('https://i.ibb.co/smVmjHY/cg6.jpg')
                break;
            case 32:
                catgirlImage = ('https://i.ibb.co/xmhr9mH/cg6-1.jpg')
                break;
            case 33:
                catgirlImage = ('https://i.ibb.co/6D26T5Z/cg8.jpg')
                break;
            case 34:
                catgirlImage = ('https://i.ibb.co/dJ0CXXs/cg8-1.jpg')
                break;
            case 35:
                catgirlImage = ('https://i.ibb.co/TWxHpqC/cg9.jpg')
                break;
            case 36:
                catgirlImage = ('https://i.ibb.co/LJy8GyB/cg9-1.jpg')
                break;
            case 37:
                catgirlImage = ('https://i.ibb.co/QXw51ZB/cg9-3.jpg')
                break;
            case 38:
                catgirlImage = ('https://i.ibb.co/CJqWJ3c/cg10.jpg')
                break;
            case 39:
                catgirlImage = ('https://i.ibb.co/sVHj4Vy/cg10-1.jpg')
                break;
            case 40:
                catgirlImage = ('https://i.ibb.co/YbCP9ty/cg11.jpg')
                break;
            case 41:
                catgirlImage = ('https://i.ibb.co/tMxXjZb/cg11-1.jpg')
                break;
            case 42:
                catgirlImage = ('https://i.ibb.co/g9cVq01/cg12.jpg')
                break;
            case 43:
                catgirlImage = ('https://i.ibb.co/FY59RnT/cg12-1.jpg')
                break;
            case 44:
                catgirlImage = ('https://i.ibb.co/V2skFVP/cg12-2.jpg')
                break;
            case 45:
                catgirlImage = ('https://i.ibb.co/yNn3Qmt/cg13.png')
                break;
            case 46:
                catgirlImage = ('https://i.ibb.co/D8WMwvm/image6.jpg')
                break; 
            case 47:
                catgirlImage = ('https://i.ibb.co/yWftWDf/cg13-3.jpg')
                break;
            case 48:
                catgirlImage = ('https://i.ibb.co/9t50yWw/cg14.jpg')
                break;
            case 49:
                catgirlImage = ('https://i.ibb.co/rcb8YmC/cg14.png')
                break;
            case 50:
                catgirlImage = ('https://i.ibb.co/3fZpvR7/cg14-1.jpg')
                break;
            case 51:
                catgirlImage = ('https://i.ibb.co/n6fP1JX/cg15.jpg')
                break;
            case 52:
                catgirlImage = ('https://i.ibb.co/kDSDBzs/cg15.png')
                break;
            case 53:
                catgirlImage = ('https://i.ibb.co/BGKf2qP/cg16.jpg')
                break;
            case 54:
                catgirlImage = ('https://i.ibb.co/L6f8tmZ/cg16-3.jpg')
                break;
            case 55:
                catgirlImage = ('https://i.ibb.co/pd4xdjw/cg17.jpg')
                break;
            case 56:
                catgirlImage = ('https://i.ibb.co/NVchk6s/cg17-1.jpg')
                break;
            case 57:
                catgirlImage = ('https://i.ibb.co/w7wCzjy/cg18.jpg')
                break;
            case 58:
                catgirlImage = ('https://i.ibb.co/BfTtbtR/cg18-1.jpg')
                break;
            case 59:
                catgirlImage = ('https://i.ibb.co/rb9TcxV/cg18-2.jpg')
                break;
            case 60:
                catgirlImage = ('https://i.ibb.co/vJT066W/cg20.jpg')
                break;
            case 61:
                catgirlImage = ('https://i.ibb.co/fQkJ9fW/cg20-1.jpg')
                break;
            case 62:
                catgirlImage = ('https://i.ibb.co/jWQnMLg/cg21.jpg')
                break;
            case 63:
                catgirlImage = ('https://i.ibb.co/myq3dZc/cg21-1.jpg')
                break;
            case 64:
                catgirlImage = ('https://i.ibb.co/Cs9S5GP/cg22.jpg')
                break;
            case 65:
                catgirlImage = ('https://i.ibb.co/LZBhpQ5/cg22-1.jpg')
                break;
            case 66:
                catgirlImage = ('https://i.ibb.co/tDmnmjM/cg26.jpg')
                break;
            case 67:
                catgirlImage = ('https://i.ibb.co/1vWr7Yz/catgirl-char.jpg')
                break;
            case 68:
                catgirlImage = ('https://i.ibb.co/pWtYLYd/cg26-1.jpg')
                break;
            case 69:
                catgirlImage = ('https://i.ibb.co/hFq8vR4/cg26-2.jpg')
                break;
            case 70:
                catgirlImage = ('https://i.ibb.co/FVK5bTg/cg27.jpg')
                break;
            case 71:
                catgirlImage = ('https://i.ibb.co/gDTbLn9/cg27-1.jpg')
                break;
            case 72:
                catgirlImage = ('https://i.ibb.co/4ZTghkG/cg28.jpg')
                break;
            case 73:
                catgirlImage = ('https://i.ibb.co/6t5sykm/cg29.jpg')
                break;
            case 74:
                catgirlImage = ('https://i.ibb.co/dGd8FWx/cg30.jpg')
                break;
            case 75:
                catgirlImage = ('https://i.ibb.co/yBY7Lfn/cg31.jpg')
                break;
            case 76:
                catgirlImage = ('https://i.ibb.co/DghMcXb/cg32.jpg')
                break;
            case 77:
                catgirlImage = ('https://i.ibb.co/PjbzB8h/cg39.jpg')
                break;
            case 78:
                catgirlImage = ('https://i.ibb.co/RhbsvBw/cg42.jpg')
                break;
            case 79:
                catgirlImage = ('https://i.ibb.co/vZLzwDy/cg46.jpg')
                break;
            case 80:
                catgirlImage = ('https://i.ibb.co/L8LMY8C/cg48.jpg')
                break;
            case 81:
                catgirlImage = ('https://i.ibb.co/2hpfnsG/cg49.jpg')
                break;
            case 82:
                catgirlImage = ('https://i.ibb.co/DwRQb8R/cg51.jpg')
                break;
            case 83:
                catgirlImage = ('https://i.ibb.co/Mk0dHkg/f22-check.jpg')
                break;
            case 84:
                catgirlImage = ('https://i.ibb.co/RPtpvrk/f23.jpg')
                break;
            case 85:
                catgirlImage = ('https://i.ibb.co/RbpkbFj/f24.jpg')
                break;
            case 86:
                catgirlImage = ('https://i.ibb.co/Lz9jp9c/fg3.jpg')
                break;
            case 87:
                catgirlImage = ('https://i.ibb.co/yYVk1NW/fg14.jpg')
                break;
            case 88:
                catgirlImage = ('https://i.ibb.co/GHcG9jW/fg16.jpg')
                break;
            case 89:
                catgirlImage = ('https://i.ibb.co/mF9BdpW/fg18.jpg')
                break;
            case 90:
                catgirlImage = ('https://i.ibb.co/P9xbJfQ/image-search-1649496235068.jpg')
                break;
            case 91:
                catgirlImage = ('https://i.ibb.co/Z6BtRFc/image0-29.jpg')
                break;
            case 92:
                catgirlImage = ('https://i.ibb.co/0Qh7Wkw/image4.jpg')
                break;
            case 93:
                catgirlImage = ('https://i.ibb.co/3kBVGk0/fg24-1.jpg')
                break;
            case 94:
                catgirlImage = ('https://i.ibb.co/PGyBHyD/image5.jpg')
                break; 
            case 95:
                catgirlImage = ('https://i.ibb.co/MGF0QkD/image0-24.jpg')
                break;
            case 96:
                catgirlImage = ('https://i.ibb.co/FghPBCQ/fg33.jpg')
                break;
            case 97:
                catgirlImage = ('https://i.ibb.co/HTvYk3d/fg37.jpg')
                break; 
            case 98:
                catgirlImage = ('https://i.ibb.co/Bw4w50M/g3.jpg')
                break;
            case 99:
                catgirlImage = ('https://i.ibb.co/M2p1Zmx/g5.jpg')
                break;
            case 101:
                catgirlImage = ('https://i.ibb.co/ZHgCyX7/g15.jpg')
                break; 
            case 102:
                catgirlImage = ('https://i.ibb.co/X3zs0Nw/H1-F2f-5-Ez.jpg')
                break;
            case 103:
                catgirlImage = ('https://i.ibb.co/J5TX2NG/g20.jpg')
                break;
            case 104:
                catgirlImage = ('https://i.ibb.co/hRg3BZZ/g21.jpg')
                break;
            case 105:
                catgirlImage = ('https://i.ibb.co/MN1wGbR/image0-1.jpg')
                break;
            case 106:
                catgirlImage = ('https://i.ibb.co/KXW2LhD/image0-4.jpg')
                break;
            case 107:
                catgirlImage = ('https://i.ibb.co/fCHksg2/image0-5.jpg')
                break;
            case 108:
                catgirlImage = ('https://i.ibb.co/864jVFC/image0-13.jpg')
                break;
            case 109:
                catgirlImage = ('https://i.ibb.co/gVCQZPp/image0-18.jpg')
                break;
            case 110:
                catgirlImage = ('https://i.ibb.co/jVct28V/image1-1.jpg')
                break;
            case 111:
                catgirlImage = ('https://i.ibb.co/yn2HFzq/r-Jysjvq4-M.jpg')
                break;
            case 112:
                catgirlImage = ('https://i.ibb.co/grspdC4/tumblr-phhk9hd-PRp1xbi59mo1-1280.jpg')
                break;
            case 113:
                catgirlImage = ('https://i.ibb.co/YhM2tWB/Lexi-as-a-catgirl.jpg')
                break;
            case 114:
                catgirlImage = ('https://i.ibb.co/3WnWGRY/Picsart-22-04-09-11-31-39-965.jpg')
                break;
            case 115:
                catgirlImage = ('https://i.ibb.co/bHczs6b/image-search-1649496224856.webp')
                break;
            case 116:
                catgirlImage = ('https://i.ibb.co/d0RXvR3/image-search-1649496262120.jpg')
                break;
            case 117:
                catgirlImage = ('https://i.ibb.co/ZBKqgZz/image-search-1649496268020.jpg')
                break;
            case 118:
                catgirlImage = ('https://i.ibb.co/kqPrCFq/image-search-1649496272882.jpg')
                break;
            case 119:
                catgirlImage = ('https://i.ibb.co/mG37c7L/image-search-1649496305250.gif')
                break;
            case 120:
                catgirlImage = ('https://i.ibb.co/d2vdwtK/Picsart-22-04-09-16-32-34-808.jpg')
                break;
            case 121:
                catgirlImage = ('https://i.ibb.co/3pn2NbJ/image-search-1649302265284.jpg')
                break;
            case 122:
                catgirlImage = ('https://i.ibb.co/0Gk52Yx/image-search-1649302203271-remastered.jpg')
                break;
            case 123:
                catgirlImage = ('https://i.ibb.co/60KKKFL/image-search-1649302242903.jpg')
                break;
            case 124:
                catgirlImage = ('https://i.ibb.co/tDBSRr5/image-search-1640836866323-remastered.jpg')
                break;
            case 125:
                catgirlImage = ('https://i.ibb.co/HYCqLBz/Picsart-22-04-09-16-46-08-559.jpg')
                break;
            case 126:
                catgirlImage = ('https://i.ibb.co/THhHvqM/image-search-1640836929822-remastered.jpg')
                break;
            case 127:
                catgirlImage = ('https://i.ibb.co/p4yv5Vs/Picsart-22-04-09-16-49-10-548.jpg')
                break;
            case 128:
                catgirlImage = ('https://i.ibb.co/PDdZNsF/image-search-1640837063519-remastered.jpg')
                break;
            case 129:
                catgirlImage = ('https://i.ibb.co/SQkf6K2/image-search-1640837101668.jpg')
                break;
            case 130:
                catgirlImage = ('https://i.ibb.co/gV1W8dK/image-search-1640837051765.jpg')
                break;
            case 131:
                catgirlImage = ('https://i.ibb.co/B6gRDc5/image-search-1640837057958.jpg')
                break;
            case 132:
                catgirlImage = ('https://i.ibb.co/Rz7Dkm6/EKe-K-w-AWo-AAd-P8t.jpg')
                break;
            case 133:
                catgirlImage = ('https://i.ibb.co/W0bmmXG/image-search-1640836950919.png')
                break;
            case 134:
                catgirlImage = ('https://i.ibb.co/H4dsWwk/image-search-1640836855220.jpg')
                break;
            case 135:
                catgirlImage = ('https://i.ibb.co/WKp08gg/image-search-1640836909191.png')
                break;
            case 136:
                catgirlImage = ('https://i.ibb.co/G20yLn3/Picsart-22-04-09-17-16-25-597.jpg')
                break;
            case 137:
                catgirlImage = ('https://i.ibb.co/s69zkn6/image-search-1649496262120.jpg')
                break;
            case 138:
                catgirlImage = ('https://i.ibb.co/QpZPQ0j/IMG-6213.jpg')
                break;
            case 139:
                catgirlImage = ('https://i.ibb.co/XDjrx8Y/IMG-6793.jpg')
                break;
            case 140:
                catgirlImage = ('https://i.ibb.co/Svcv3qh/cg16-1.jpg')
                break; 
            case 141:
                catgirlImage = ('https://i.ibb.co/jhZ3mQn/cg13-2.jpg')
                break;
            case 142:
                catgirlImage = ('https://i.ibb.co/6Z6CTdy/SJNn-8mw.gif')
                break;
            case 143:
                catgirlImage = ('')
                break;
            case 144:
                catgirlImage = ('')
                break;
            case 145:
                catgirlImage = ('')
                break;
            case 146:
                catgirlImage = ('')
                break;
            case 147:
                catgirlImage = ('')
                break;
            case 148:
                catgirlImage = ('')
                break;
            case 149:
                catgirlImage = ('')
                break;
            case 150:
                catgirlImage = ('')
                break;
            }

        const Discord = require('discord.js');
        const catgirlEmbed = new Discord.MessageEmbed()
        .setColor('#D31AD3')
        .setAuthor(message.author.username + ' found a catgirl', message.author.displayAvatarURL())
        .setImage(catgirlImage)

        message.channel.send(catgirlEmbed);}}