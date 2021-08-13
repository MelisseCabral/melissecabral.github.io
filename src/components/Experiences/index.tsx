import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import HealingIcon from '@material-ui/icons/Healing';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Experiences() {
  const classes = useStyles();

  return (
      <div id='experiences'>
        <h2>Professional Experiences</h2>
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="primary">
                    <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1" align='left'>
                    Instituto Atlântico - Software Enginner
                    </Typography>
                    <Typography align='left'>Research and development of solutions for creating new products and technologies.</Typography>
                    <Typography align='left' variant="body2" color="textSecondary">JULY 2021 - PRESENT</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                    <HealingIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                    LIV Saúde - Fullstack Developer
                    </Typography>
                    <Typography>Fullstack development working in the Electronic Health Record System, using backend in Node.js and frontend in React.js 
                        with Redux and postgres and oracle database</Typography>
                    <Typography align='right' variant="body2" color="textSecondary">SEPTEMBER 2020 - JUNE 2021</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color="secondary">
                <EmojiObjectsIcon />
            </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1" align='left'>
                Ilumini Enginnering - Fullstack Developer
                </Typography>
                <Typography align='left'>Web development of platform for sales control proposal generation, commercial contracts for sale of photovoltaic projects. 
                    Using Javascript, nodeJS, HTML, CSS and Cloud Functions on Firebase.</Typography>
                <Typography align='left' variant="body2" color="textSecondary">SEPTEMBER 2018 - MAY 2020</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
      </div>
  );
}