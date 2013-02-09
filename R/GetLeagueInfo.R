# Given a year, return a data frame of league info
GetLeagueInfo <- function(year) {
  # load libraries
  library(stringr)
  
  # load game list to calculate number of teams
  gl.file.name <- sprintf("http://simbase.org/year%d/gameslist.js", year)
  games.list <- readLines(gl.file.name)
  nteams.str <- grep("nteams", games.list, value=T)
  nteams <- as.numeric(str_extract(nteams.str, "[0-9]+"))

  # load league info to get the team names (and more)
  lea.file.name <- sprintf("http://www.simbase.org/year%d/league.lea", year)
  league.info <- read.csv(lea.file.name, skip=1, nrows=nteams, , stringsAsFactors=F)
  league.info$div <- as.factor(league.info$div)

  # get the fields we care about (mainly everything but the password)
  fields <- c("X.city", "nick", "full", "root", "div", "owner", "email", "short", "moves", "stadium", "prevroot")
  league <- league.info[,which(names(league.info) %in% fields)]
}
