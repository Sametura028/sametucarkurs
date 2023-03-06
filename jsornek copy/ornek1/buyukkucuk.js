
function cap(str){
  let spl = str.split(' ');
  for(let i = 0; i < spl.length; i++){
    let temp = spl[i];
    temp = temp[0].toUpperCase() + temp.slice(1)
    temp = temp.slice(0,-1) + temp[temp.length - 1].toUpperCase();
    spl[i] = temp;
  }
  return spl.join(' ');
}

console.log(cap("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam similique molestias at, ab soluta iusto, vero vitae voluptatem voluptate, quam voluptatum deserunt. Fugit, ducimus minus quia aspernatur tempora fuga ab officiis recusandae maiores nobis labore est voluptatem, tempore asperiores in cum officia voluptate quisquam mollitia ea eligendi adipisci qui. Odio?"))
