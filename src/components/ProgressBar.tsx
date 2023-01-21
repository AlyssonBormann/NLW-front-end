interface ProgressBarProps {
  progress: number
}
export function ProgressBar(props: ProgressBarProps) {
  const ProgressStyle = {
    width: `${props.progress}%`,
  }
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600"
        style={ProgressStyle}
        //UMA VEZ '{}' SIGINIFICA QUE QUERO COLOCA UMA VARIAL JAVASCRIPT
        // 2 VEZES {{}} SEIGNIFICA QUE QUERO COLOCAR UM OBJETO
      ></div>
    </div>
  )
}
