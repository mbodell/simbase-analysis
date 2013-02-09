# Get a mrf frame given a file name
# Sample:
# mrf <- GetMRFFrameFromFile("http://simbase.org/year26/mrfs/angst-at-gamers-25.mrf")
GetMRFFrameFromFile <- function(x) {
  # read the file
  file.text <- readLines(x)
  
  # load library
  library(stringr)
  
  # figure out how to break up the several tables
  mark <- grep("^#[^,]*$",file.text)
  mark <- append(mark,length(file.text)+1)
  
  # grab each table and add it to the return list
  ret = list()
  for(i in 1:(length(mark)-1)) {
    ret[[str_replace(file.text[mark[i]],"#","")]] <- read.csv(textConnection(file.text), col.names=str_extract_all(file.text[mark[i]+1],"[a-zA-Z]+")[[1]], skip=mark[i], nrows=mark[i+1]-(2+mark[i])) 
  }
  
  # Convert data types
  pos <- c("p", "c", "1b", "2b", "3b", "ss", "lf", "cf", "rf", "dh")
  
  ret$fielding$position <- factor(ret$fielding$position,levels=pos)
  ret$advance$position <- factor(ret$advance$position,levels=pos)
  ret$substitution$pos <- factor(ret$substitution$pos,levels=pos)
  ret$lineup$pos <- factor(ret$lineup$pos,levels=pos)
  
  ret
  
  
}