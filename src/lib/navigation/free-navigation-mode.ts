import {BaseNavigationMode} from './base-navigation-mode.interface';
import {WizardState} from './wizard-state.model';

/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
export class FreeNavigationMode extends BaseNavigationMode {

  /**
   * @inheritdoc
   */
  public isNavigable(wizardState: WizardState, destinationIndex: number): boolean {
    return true;
  }
}
