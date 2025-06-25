
// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61Uy4rjRhT9laG2bab1sF6GhuhlS/JDkt1u2wpZlKWSXbZerpL8GrwIBLLOPjCbxFkFQiDbya/4E+YTgtzdmYFMZjoQbVSqKt17zrnn3jcgyzFFXXQArTegIHgLS1Qvy0OBQAtoVRwjAhoggiUELUD1UW/cs+EgzfDNVAiP7Ujp2HgSJmRUVe54rXdXR3fg+mZ4B04NUFTzBIefCWiZwcN6c2O47lSYRiLX4yxV0ph5ZfZvGYmJeusktjoTelyad+BUR4SY4GxhFkuUIgKTLjp4EJOXwe9Y+aRnuHz40Aw4c1j21SAUA4fvNQNVTQ9LOlhxAXRz7cF/GXyjA1NH6C95zSe+LDEWJz1oet8xRocs31SOqGQ41egMJ+EjfIoXGYrsCGUlLg8v1j3Xj4NE2d03edreP/gDURZ3Izbk5ygw7EjniPWADD/UVM58GXAb4QIVR1nHN/fKblpRv22NaFywUeXvB7Zmo93iRt+W+Gh/DNwjz15Z/xfdXZXMPW/kzEeT/rTocd5xM0fd1YbE3ZnSNdNJvssjPuls0ubL4LMBn/NSX9OL+14y8mIxnK8L6rtz2jXshYOL21lwz0po3pl9gA/LinwO5ZSdMO32sitX7jIfb2/HA9rjBMznWofaSzvUrI45nzkyIzB7C5b8LZnIRxZVURAOqniwXYhuVFEsjt39YWnBFGvlXPXvrozW6GBHoMWeGoCgBaYlgSXOs+seqzQAjLYjFBJUXuUFPcXnellvOZTX1o0dyg7vjbsqmh7xerix9rLBTlh/25+sdswdaICC5CGiFEUWpmVODn1EKVwgClpfXytVkyYozUvk4Ai0gCwzrKxIDM/LTfEr+nq3hCWFRfE6QyVogJjkaR+BVkkq1ADXPyRD49Q2zxmGobV1TjI1nlMMWdR4hdcMQ6s5po9Z73GKaAnTArRYSWBkgRM59tT4n4CYKiObospIpqwYTYbjmhLDtGXDlNSmzijyF4Dwp28aIEP78tHJtf482wAxJrQcZ1WR5DB6tvnzIQzDvMrK0SEL9XqBCGh9tI3KEmcLWlOrMkjCJd4iveYBWjFMKPq75Iig6JnL0xjT86h2omIpQ8mYCqDGXgf6pzgt/hP6JNd7LCfwPKsoTV7gZZatb9YHDZDBOhp4//aH7y7nHy/nd5fzT5fzn5fzb68u5/Pll28v598v53evLudfr4ffv3r/9uc/6uv1u1byiWMNKUIlxAkFLaB3Ja7pypbpHS1Jtjsd1Vyo+kIFHzR57rZHN3MFFDfDHNtBwqaFvy50rhvCsEjaQs5Ht0k1S2V1F4or3r77RBDQAuReaU+6PTxLtaBtLdisk9DBagud4/5BK9cpOiJp4TA3fnE0E2FedaqDUOy4dBZsnU1z4KK9eYArMw4nRzbNheM4dHNdvauzRWiLQ/RxsrTnZdjaujDceJuVr+bWflhBu7cXGOnWmyE8ceeBphMpK27bwtBot3VN9EJJs1axh+dBO1jqw41z8FlqOBwRK80WnufAdQ4lT/MfP3Uovn7GGF3H6VPVvlz9R+S1S5lT46MgTxP6X6acFm0m1WYNbdwJomAzdrp+ibNO1g2GCA74WJinzlbtW26uHMCpbpcigWWckxS0AMwikl+9RfKqtr2dxflnkunqwjaeqCeQluqHVvpEd7L84y2P5IUF6RK0gDdZC1rdFge1KEYlLJ8bE6j1YzsqOP0FzjTmbMUIAAA=",
  PREFIX: process.env.PREFIX || '+',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  BOT_NAME: process.env.BOT_NAME || "সাঁপুঁডেঁ বাঁবাঁ",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://files.catbox.moe/jw9opw.jpg",
  DESCRIPTION: process.env.DESCRIPTION || "WELCOME TO HAIKO-MDX-V1",
  OWNER_NAME: process.env.OWNER_NAME || "𝐇𝐀𝐈𝐊𝐎-𝐌𝐃𝐗",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "529633982655",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;


