#!/usr/bin/env bash

ATT=${1:-"WARC-Record-ID"}
INFILE=${2:-"hdfs:///user/bbkruit/CC-MAIN-20160924173739-00000-ip-10-143-35-109.ec2.internal.warc.gz"}

EXECUTORS=20

hdfs dfs -rm -r -f /user/wdps1706/spark-data

~/spark-2.1.2-bin-without-hadoop/bin/spark-submit \
  --class nl.vu.wdps1706.FullPipelineRunner \
  --packages org.jsoup:jsoup:1.10.3,com.robbypond:boilerpipe:1.2.3,org.apache.opennlp:opennlp-uima:1.8.3,com.google.code.gson:gson:2.8.2 \
  --master yarn \
  --deploy-mode cluster \
  --num-executors ${EXECUTORS} \
  wdps1706-1.0-SNAPSHOT.jar ${INFILE} ${ATT} ${EXECUTORS}

