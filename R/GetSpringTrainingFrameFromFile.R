# Given a spring training file name, return a hitters and pitchers data frame
GetSpringTrainingFrameFromFile <- function(x) {
  # read the file
  file.text <- readLines(x)

  # Find where the two header rows are and extract them
  head <- grep("PO.*ID.*Name", file.text)
  cname <- str_extract_all(c(file.text[head[1]],file.text[head[2]]), "[a-zA-Z]+")
  
  # Load the hitter and pitcher data fields
  hitters <- read.fwf(textConnection(file.text), c(2, 6, 16, 6, 6, 6, 6, 4, 4, 4, 4, 4), col.names=cname[[1]], skip=head[1], n=head[2]-(1+head[1])) 
  pitchers <- read.fwf(textConnection(file.text), c(2, 6, 16, 6, 6, 6, 6, 4, 4, 4, 4, 4), col.names=cname[[2]], skip=head[2])

  # Fix the hitters to be proper table values
  hit.skills <- c("PR","FR","AV","VG","EX")
  hit.pos <- c("c", "1b", "2b", "3b", "ss", "lf", "cf", "rf")
  hitters$Arm <- factor(sapply(hitters$Arm, function(x) { str_extract(x, "[A-Z]+") }), hit.skills)
  hitters$Def <- factor(sapply(hitters$Def, function(x) { str_extract(x, "[A-Z]+") }), hit.skills)
  hitters$Spd <- factor(sapply(hitters$Spd, function(x) { str_extract(x, "[A-Z]+") }), hit.skills)
  hitters$PO <- factor(sapply(hitters$PO, function(x) { str_extract(x, "[A-Za-z0-9]+") }), hit.pos)
  hitters$Name <- str_extract(hitters$Name,"[A-Za-z0-9][A-Za-z0-9 ]*")
  hitters$BB.H <- hitters$OBP * hitters$PA
  hitters$BB <- round(hitters$PA*(hitters$OBP-hitters$BA)/(1-hitters$BA),0)
  hitters$H <- hitters$BB.H - hitters$BB
  hitters$AB <- hitters$PA - hitters$BB
  hitters$TB <- round(hitters$AB * hitters$SLG,0)
  hitters$TB.H <- hitters$TB / max(hitters$H,1)

  # Fix the pitchers to be proper table values
  pitch.skills <- c("LO", "AV", "HI")
  pitch.roles <- c("sp", "mr", "rp")
  pitchers$GB <- factor(sapply(pitchers$GB, function(x) { str_extract(x, "[A-Z]+") }), pitch.skills)
  pitchers$FB <- factor(sapply(pitchers$FB, function(x) { str_extract(x, "[A-Z]+") }), pitch.skills)
  pitchers$LD <- factor(sapply(pitchers$LD, function(x) { str_extract(x, "[A-Z]+") }), pitch.skills)
  pitchers$PO <- factor(sapply(pitchers$PO, function(x) { str_extract(x, "[A-Za-z0-9]+") }), pitch.roles)
  pitchers$Name <- str_extract(pitchers$Name,"[A-Za-z0-9][A-Za-z0-9 ]*")
  pitchers$BB.H <- pitchers$OBP * pitchers$PA
  pitchers$BB <- round(pitchers$PA*(pitchers$OBP-pitchers$BA)/(1-pitchers$BA),0)
  pitchers$H <- pitchers$BB.H - pitchers$BB
  pitchers$AB <- pitchers$PA - pitchers$BB
  pitchers$TB <- round(pitchers$AB * pitchers$SLG,0)
  pitchers$TB.H <- pitchers$TB / pitchers$H

  list(hitters=hitters, pitchers=pitchers)
}