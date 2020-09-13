const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (superbowls) => {
  let superbowl = superbowls.find( record => record.result === "W" );
  return !!superbowl ? superbowl.year : undefined
}


