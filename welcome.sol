pragma solidity ^0.4.16;

contract WellcomeContract {
  
  string public wellcomeString;
  
  function setWellcomeString(string newWellcomeString) {
      wellcomeString = newWellcomeString;
  }
  
}
