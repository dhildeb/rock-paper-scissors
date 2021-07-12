using System;

namespace RockPaperScissors
{
  class Game
  {

    static void Main(string[] arg)
    {
      System.Random random = new System.Random();
      bool play = true;
      Console.Clear();
      while (play)
      {
        int compChoice = random.Next(1, 4);
        System.Console.WriteLine("Play Rock, Paper, Scissors?");
        System.Console.WriteLine("(y/n)");
        string input = System.Console.ReadLine().ToLower();
        if (input == "n")
        {
          play = false;
          break;
        }
        Console.Clear();
        System.Console.WriteLine("Rock, Paper or Scissors?");
        string choice = System.Console.ReadLine().ToLower();
        switch (choice)
        {
          case "rock":
            if (compChoice == 1)
            {
              System.Console.WriteLine("Computer Chose scissors");
              System.Console.WriteLine("You Win!");
              break;
            }
            if (compChoice == 2)
            {
              System.Console.WriteLine("Computer Chose rock");
              System.Console.WriteLine("You Tied");
              break;
            }
            if (compChoice == 3)
            {
              System.Console.WriteLine("Computer Chose paper");
              System.Console.WriteLine("You Lose");
              break;
            }
            break;
          case "paper":
            if (compChoice == 1)
            {
              System.Console.WriteLine("Computer Chose scissors");
              System.Console.WriteLine("You lose");
              break;
            }
            if (compChoice == 2)
            {
              System.Console.WriteLine("Computer Chose rock");
              System.Console.WriteLine("You Win!");
              break;
            }
            if (compChoice == 3)
            {
              System.Console.WriteLine("Computer Chose paper");
              System.Console.WriteLine("You Tied");
              break;
            }
            break;
          case "scissors":
            if (compChoice == 1)
            {
              System.Console.WriteLine("Computer Chose scissors");
              System.Console.WriteLine("You Tied");
              break;
            }
            if (compChoice == 2)
            {
              System.Console.WriteLine("Computer Chose rock");
              System.Console.WriteLine("You Lose");
              break;
            }
            if (compChoice == 3)
            {
              System.Console.WriteLine("Computer Chose paper");
              System.Console.WriteLine("You Win!");
              break;
            }
            break;
          default:
            System.Console.WriteLine("no cheating");
            break;
        }
      }
    }
  }
}