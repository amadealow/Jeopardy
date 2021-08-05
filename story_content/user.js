function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Y9l1uGpl0l":
        Script1();
        break;
      case "6Vk6jgcKZ6O":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
player.SetVar('Results.ScorePoints', player.GetVar('current_score'));
}

function Script2()
{
  var player = GetPlayer();
var score = player.GetVar("ScorePercentage");
player.SetVar("ScorePercentage", Math.round(score));
}

