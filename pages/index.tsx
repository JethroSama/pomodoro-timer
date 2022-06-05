import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import PomodoroTimer from '../components/PomodoroTimer'
import Settings from '../components/Settings'
import useLocalStorage from '../hooks/useLocalStorage'
import { AppSettings } from '../types'

const Home: NextPage = () => {
  const [appSettings, setAppSettings] = useLocalStorage<AppSettings>('appSettings', {
    timers: {
      workTime: 25,
      breakTime: 5,
      longBreakTime: 15
    }
  })

  const [workDone, setWorkDone] = useLocalStorage<number>('workDone', 0)
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false)


  return (
    <div>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-light-green w-full h-screen select-none [-webkit-tap-highlight-color:transparent]'>
        <Header workDone={workDone} setSettingsOpen={setSettingsOpen} />
        <PomodoroTimer appSettings={appSettings} setWorkDone={setWorkDone} workDone={workDone} />
        <Settings appSettings={appSettings} setAppSettings={setAppSettings} setSettingsOpen={setSettingsOpen} settingsOpen={settingsOpen} />
      </main>


    </div>
  )
}

export default Home
